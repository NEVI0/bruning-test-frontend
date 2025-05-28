export interface EmployeeAbstract {
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

export interface EmployeeProps {
  id: string;
  name: string;
  nickname: string;
  father: string;
  mother: string;
  document: string;
  birthdate: string;
  jobDate: string;
}

export default class Employee implements EmployeeAbstract {
  id: EmployeeAbstract['id'];
  name: EmployeeAbstract['name'];
  nickname: EmployeeAbstract['nickname'];
  parents: EmployeeAbstract['parents'];
  document: EmployeeAbstract['document'];
  birthdate: EmployeeAbstract['birthdate'];
  jobDate: EmployeeAbstract['jobDate'];

  constructor(props: EmployeeProps) {
    this.id = props.id;
    this.name = props.name;
    this.nickname = props.nickname;

    this.parents = {
      father: props.father,
      mother: props.mother,
    };

    this.document = props.document;
    this.birthdate = props.birthdate;
    this.jobDate = props.jobDate;
  }
}
