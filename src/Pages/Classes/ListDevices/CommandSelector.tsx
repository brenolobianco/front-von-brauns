import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, CommandList, CommandItem } from "./Styles";

const apiUrl = process.env.REACT_APP_API_URL;
interface Comand {
  id: number;
  name: string;
  selected: boolean;
}
const CommandSelectorModal: React.FC<{ device: any, onClose: () => void, onSave: (commands: any) => void }> = ({ device, onClose, onSave }) => {
  const [commands, setCommands] = useState<Comand[]>([]);
 
  useEffect(() => {
    fetchCommands();
  }, []);

  const fetchCommands = async () => {
    try {
      const response = await axios.get(`${apiUrl}/devices/${device.id}/commands`);
      setCommands(response.data);
    } catch (error) {
      console.error("Erro ao buscar comandos.");
    }
  };

  const handleSave = () => {
    const selectedCommands = commands.filter(command => command.selected);
    onSave(selectedCommands);
  };

  const handleCommandSelect = (command: any) => {
    setCommands(commands.map(cmd => cmd.id === command.id ? { ...cmd, selected: !cmd.selected } : cmd));
  };

  return (
    <Modal>
      <h2>Selecionar Comandos para {device.name}</h2>
      <CommandList>
        {commands.map((command: any) => (
          <CommandItem key={command.id}>
            <label>
              <input
                type="checkbox"
                checked={command.selected || false}
                onChange={() => handleCommandSelect(command)}
              />
              {command.name}
            </label>
          </CommandItem>
        ))}
      </CommandList>
      <Button onClick={handleSave}>Salvar</Button>
      <Button onClick={onClose}>Fechar</Button>
    </Modal>
  );
};

export default CommandSelectorModal;
