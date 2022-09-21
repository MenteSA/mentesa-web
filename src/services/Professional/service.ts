import api from "../api";
import ProfessionalProfileDto from './dtos/Professional';

export async function fetchProfessionalProfile(): ProfessionalProfileDto {

    const url = 'professionals/profile';
    const { data } = await api.get(url)
    console.log('DATA', data);
    return data;   
}
