export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: {
      ...employeesList,
    },
    getNumberofDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return obj;
}
