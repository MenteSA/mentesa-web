import api from "../api";
import ProfessionalProfileDto from './dtos/Professional.dto';

export async function fetchProfessionalProfile(): ProfessionalProfileDto {
    const url = 'professionals/profile';
    const { data } = await api.get(url);
    return data;   
}


export async function fetchProfessionalProfileUpdate({ name, crp, approach, email, cellphone }: ProfessionalProfileDto): Promise<ProfessionalProfileUpdateDto> {
    const url = `professionals/profile`; 
    const payload = { name, crp, approach, email, cellphone };
    const { data } = await api.put(url, payload);
    return data ;
}
