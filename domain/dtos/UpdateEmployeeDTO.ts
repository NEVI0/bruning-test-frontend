export default interface UpdateEmployeeDTO {
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
