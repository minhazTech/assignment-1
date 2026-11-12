const multiplyValue = (a : number, b: number) : number =>{
    if ( a * b){
        return a * b;
    }

    return a && b != 0 ?a * 2 : 0;
}




type Input = string | number| boolean;

const processInput = (input :Input) =>{
 if (typeof input === 'string'){
    input=input.trim();
    return (input.charAt(0).toUpperCase()+ input.toLocaleLowerCase().slice(1));
 }
 else if (typeof input === 'number'){
    return (input * 2);
 }
 else if (typeof input === 'boolean'){
    return (input ?"Active" : "Inactive");
 }

}
  




const formatCoordinate: (cord: readonly [number, number, string]) => string[] = (cord) => {
    const [latitude, longitude, locationName] = cord;
    return [`Location: ${locationName}, ${latitude}, ${longitude}`];
}  

   

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"])); 

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.reduce((ar, ord) => [...ar, ...ord], []);
};



 interface Course {
   title: string,
   students: number,
   isPublished: boolean,
}


const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

const getPopularCourses = (course:Course[], minStudents: number)=> {
   return course.filter ((course) => course.students >= minStudents && course.isPublished).map((course) => 
      ({ title: course.title, students: course.students, isPublished: course.isPublished }));
} 



   





const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
} 



class Employee {
   protected name: string;
   private baseSalary: number;

   constructor(name: string, baseSalary: number) {
      this.name = name;
      this.baseSalary = baseSalary;
   }
    getDetails(): string {
        return `"Employee: ${this.name}, Base Salary: ${this.baseSalary}"`;
    }
}
class Manager extends Employee {
   private department: string;
   constructor(name: string, baseSalary: number, department: string) {
      super(name, baseSalary);
      this.department = department;
   }
   getRoleInfo():string {
      return `"Manager of ${this.department}: ${this.name}"`;
   }
}

const manager = new Manager("Alice", 50000, "Engineering");



