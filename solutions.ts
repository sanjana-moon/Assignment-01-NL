function multiplyValue(value: number, multiplier: number = 2): number {
  return (value * multiplier)
}



function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase()
  }
  else if (typeof value === "number") {
    return value * 10;
  }
  else {
    if (value === true) {
      return "Active";
    }
    else {
      return "Inactive";
    }
  }
}



function formatCoordinate(coordinate: readonly [number, number, string]): string {
  const [latitude, longitude, locationName] = coordinate
  return `Location: ${locationName} (${latitude}, ${longitude})`
}



const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.reduce<T[]>((acc, arr) => [...acc, ...arr], []);
};



interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents
  );
}


const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];





function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];





class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  public getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  public getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}





async function validateAgeAsync(age: number): Promise<string> {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
}


(async () => {
  try {
    const result1 = await validateAgeAsync(20);
    console.log(result1);
  } catch (error) {
    console.error(error);
  }

  try {
    const result2 = await validateAgeAsync(15);
    console.log(result2);
  } catch (error) {
    console.error(error);
  }
})();