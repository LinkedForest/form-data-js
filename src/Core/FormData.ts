// Interfaces
export interface IFormData {
    data: any;
}

// FormData Component
export const FormData = ({ data }: IFormData) => {
    return { Data: data };
};
