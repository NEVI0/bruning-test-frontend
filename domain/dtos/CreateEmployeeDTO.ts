export default interface CreateEmployeeDTO {
  id: string;
  name: string;
  nickname: string;
  parents: {
    father: string;
    mother: string;
  };
  document: string;
  birthdate: string;
  jobDate: string;
}
