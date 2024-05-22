import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContentContainer, PageContainer, DeviceCard, CommandResult } from "./Styles";

const apiUrl = process.env.REACT_APP_API_URL;

const MonitoringDashboard: React.FC = () => {
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [commandResults, setCommandResults] = useState<{ [key: string]: { [key: string]: string } }>({});

  useEffect(() => {
    fetchSelectedDevices();
  }, []);

  const fetchSelectedDevices = async () => {
    try {
      const token = localStorage.getItem("@VolleyHub:token");
      const response = await axios.get(`${apiUrl}/devices/selected`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSelectedDevices(response.data);
    } catch (error) {
      console.error("Erro ao buscar dispositivos selecionados.");
    }
  };

  const fetchCommandResults = async (deviceId: number, command: string) => {
    try {
      const response = await axios.post(`${apiUrl}/devices/${deviceId}/execute`, { command });
      return response.data;
    } catch (error) {
      console.error("Erro ao executar comando.");
      return null;
    }
  };

  return (
    <PageContainer>
      <ContentContainer>
        {selectedDevices.map((device: any) => (
          <DeviceCard key={device.id}>
            <h2>{device.name}</h2>
            {device.commands.map((command: any) => (
              <CommandResult key={command.id}>
                <strong>{command.name}:</strong>
                <span>{commandResults[device.id]?.[command.name] || "Carregando..."}</span>
              </CommandResult>
            ))}
          </DeviceCard>
        ))}
      </ContentContainer>
    </PageContainer>
  );
};

export default MonitoringDashboard;
