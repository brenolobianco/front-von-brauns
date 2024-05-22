import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import {
  Container,
} from "./Styles";
import { RegisterForm
  ,

  Title,
  Input,
  Button,
  Label,
  ErrorText, 
  LabelInput} from "../../../components/RegisterForm";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "../../../components/SideBard/SideBar";

const apiUrl = process.env.REACT_APP_API_URL;

type FormData = {
  identifier: string;
  description: string;
  manufacturer: string;
  url: string;
};

const RegisterDevice: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("identifier", data.identifier);
      formData.append("description", data.description);
      formData.append("manufacturer", data.manufacturer);
      formData.append("url", data.url);

      const token = localStorage.getItem("@Devices:token");

      const response = await axios.post(`${apiUrl}/devices`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        toast.success("Cadastro realizado com sucesso!");
      } else {
        toast.error(
          "Erro ao fazer cadastro. Por favor, tente novamente  tarde."+ response.data.mensagens
        );
      }
    } catch (error) {
      toast.error(
        "Erro ao fazer cadastro. Por favor, tente novamente mais tarde."
      );
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <RegisterForm onSubmit={handleSubmit(onSubmit)}>
          <Title>Cadastrar Dispositivo</Title>
          <LabelInput>
          <Label>Identificador</Label>
          <Input
            type="text"
            {...register("identifier", { required: "Nome do Dispositivo é obrigatório" })}
            placeholder="Nome do Dispositivo"
          />
          {errors.identifier && <ErrorText>{errors.identifier.message}</ErrorText>}
          </LabelInput>
          <LabelInput>
          <Label>Descrição</Label>
          <Input
            type="text"
            {...register("description", { required: "Descrição é obrigatório" })}
            placeholder="Descrição"
          />
          {errors.description && <ErrorText>{errors.description.message}</ErrorText>}
          </LabelInput>
          <LabelInput>
          <Label>Fabricante:</Label>
          <Input
            type="text"
            {...register("manufacturer", { required: "Fabricante é obrigatório" })}
            placeholder="Fabricante"
          />
          {errors.url && <ErrorText>{errors.url.message}</ErrorText>}
          </LabelInput>
          <LabelInput>
          <Label>url:</Label>
          <Input
            type="text"
            {...register("url", { required: "Url é obrigatório" })}
            placeholder="Url"
          />
          {errors.url && <ErrorText>{errors.url.message}</ErrorText>}
          </LabelInput>
          <Button type="submit">Cadastrar</Button>
        </RegisterForm>
      </Container>
    </>
  );
};

export default RegisterDevice;