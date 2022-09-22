import api from "../api";

import {
  ProfessionalProfileDto,
  ProfessionalProfileUpdateDto,
} from "./dtos/Professional.dto";

export async function fetchProfessionalProfile(): Promise<ProfessionalProfileDto> {
  const url = "professionals/profile";
  const { data } = await api.get(url);
  return data;
}

export async function fetchProfessionalProfileUpdate({
  nome,
  crp,
  approach,
  email,
  cellphone,
}: ProfessionalProfileDto): Promise<ProfessionalProfileUpdateDto> {
  const url = `professionals/profile`;
  const payload = { nome, crp, approach, email, cellphone };
  const { data } = await api.put(url, payload);
  return data;
}
