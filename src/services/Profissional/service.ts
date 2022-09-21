import api from "../api";
import ProfessionalProfileDto from './dtos/Professional';

export async function fetchProfessionalProfile(id: number): Promise<ProfessionalProfileDto> {

    const url = 'professionals';
    const payload = { id };
    const result = await api
        .get(url, payload)
        .then((response) => {
            console.log(response);
            return response.data;
        })
}
