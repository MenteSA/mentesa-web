export interface ProfessionalProfileDto {
    nome: string;
    crp: string;
    approach: string;
    email: string;
    cellphone: string;
}
export interface ProfessionalProfileUpdateDto {
    status: string;
    message: string;
}

export interface ProfessionalId {
    id: string;
  }
  
  export interface ProfessionalIdAndPatient {
    professionalId: string;
    patientId: string;
  }
  
  export interface Professional {
    id: string;
    name: string;
    email: string;
    picture: string;
    crp: string;
    approach: string;
    contact: string;
    role: string;
  }