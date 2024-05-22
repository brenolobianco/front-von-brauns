import { AppContainer, ColumnContainer, ColumnTitle, DeviceListContainer, DeviceCard } from "./Styles";

import { useEffect, useState } from "react";
import { 	fetchDevices , selectDevice } from "../utils/apiUtils"; 
import SideBar from "../../components/SideBard/SideBar";

export interface Device {
  id: number;
  name: string;
  identifier: string;
  manufacturer: string;
  isSelected: boolean; // Adicionar estado de seleção
}

const Dashboard: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    fetchDevices().then(data => {
      const mappedDevices = data.map((device: Device) => ({
        ...device,
        isSelected: false
      }));
      setDevices(mappedDevices);
    });
  }, []);

  const handleSelectDevice = (id: number) => {
   
    setDevices(devices =>
      devices.map(device => 
        device.id === id ? { ...device, isSelected: !device.isSelected } : device
      )
    );
  };

  const handleSubmitSelectedDevices = () => {
    devices.filter(device => device.isSelected).forEach(device => {
      selectDevice(device.id).then(response => {
        console.log(response); // Log the response or handle it based on your requirement
      });
    });
  };

  return (
    <div>
      <SideBar/>
      <AppContainer>
        <ColumnContainer>
          <h1>Bem Vindo</h1>
          <DeviceListContainer>
            {devices.length > 0 ? (
              devices.map((device) => (
                <DeviceCard key={device.id}>
                  <input
                    type="checkbox"
                    checked={device.isSelected}
                    onClick={() => handleSelectDevice(device.id)}
                  />
                  <div>
                    <h3>{device.name}</h3>
                    <p>Identificador: {device.identifier}</p>
                    <p>Fabricante: {device.manufacturer}</p>
                  </div>
                </DeviceCard>
              ))
            ) : (
              <p>Nenhum dispositivo encontrado.</p>
            )}
          </DeviceListContainer>
          <button onClick={handleSubmitSelectedDevices}>Enviar Dispositivos Selecionados</button>
        </ColumnContainer>
      </AppContainer>
    </div>
  );
};

export default Dashboard;
