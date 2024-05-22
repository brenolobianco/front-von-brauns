import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, ContentContainer, ListContainer, ListHeader, ListItem, PageContainer, Pagination } from "./Styles";

import SideBar from "../../../components/SideBard/SideBar";
import CommandSelectorModal from "./CommandSelector";

const apiUrl = process.env.REACT_APP_API_URL;
const itemsPerPage = 5;

const ListDevices: React.FC = () => {
  const [devices, setDevices] = useState([]);
const [selectedDevices, setSelectedDevices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCommandSelector, setShowCommandSelector] = useState(false);
  const [currentDevice, setCurrentDevice] = useState(null);

  useEffect(() => {
  
  
    fetchSelectedDevices();
  }, []);

 

  const fetchSelectedDevices = async () => {
    const userId= localStorage.getItem("@userId");
    try {
      const token = localStorage.getItem("@Devices:token");
      const response = await axios.get(`${apiUrl}/user/${userId}/devices`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDevices(response.data);
    } catch (error) {
      toast.error("Erro ao buscar dispositivos selecionados.");
    }
  };

  const handleDeviceSelect = (device: any) => {
    setCurrentDevice(device);
    setShowCommandSelector(true);
  };

  const handleCommandSelection = (commands: any) => {

    setShowCommandSelector(false);
    toast.success("Comandos selecionados com sucesso.");
  };

  const totalPages = Math.ceil(devices.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = devices.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <SideBar />
      <PageContainer>
        <ContentContainer>
          {currentItems.map((device: any) => (
            <ListContainer key={device.id}>
            
              <ListItem>
                <p><strong>Identificador:</strong> {device.identifier}</p>
                <p><strong>Fabricante:</strong> {device.manufacturer}</p>
                <Button onClick={() => handleDeviceSelect(device)}>Selecionar Comandos</Button>
              </ListItem>
            </ListContainer>
          ))}
          <Pagination>
            <ul style={{ display: "flex", justifyContent: "center", flexDirection: "row", gap: "10px" }} className="pagination">
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <button onClick={() => paginate(i + 1)} className="page-link">
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          </Pagination>
        </ContentContainer>
      </PageContainer>
      {showCommandSelector && currentDevice && (
        <CommandSelectorModal
          device={currentDevice}
          onClose={() => setShowCommandSelector(false)}
          onSave={handleCommandSelection}
        />
      )}
    </>
  );
};

export default ListDevices;
