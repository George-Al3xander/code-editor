import { FaJs, FaReact, FaPython, FaJava,  FaPhp} from 'react-icons/fa';
import { TbBrandCSharp,TbBrandCpp  } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
export const BASE_URL = "https://emkc.org/api/v2/piston"

export const LANGUAGES = ["javascript","typescript","python","java","csharp","php","c++"]

export const BACKUP_LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
};

export const CODE_SNIPPETS =  {
    javascript: 'const greet = (name) => {\n  console.log(`Hello, ${name}!`);\n};\ngreet("World");',
    typescript: 'interface Person {\n  name: string;\n  age: number;\n}\n\nconst person: Person = { name: "John", age: 25 };\nconsole.log(`Name: ${person.name}, Age: ${person.age}`);',
    python: 'def factorial(n):\n    if n == 0 or n == 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5));',
    java: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
    csharp: 'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, C#!");\n    }\n}',
    php: '$color = "blue";\necho "The sky is $color";',
    "c++": '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, C++!" << endl;\n    return 0;\n}',
}

export const LANGUAGES_FILE_EXTENSIONS = {
    javascript: '.js',
    typescript: '.ts',
    python: '.py',
    java: '.java',
    csharp: '.cs',
    php: '.php',
    "c++": '.cpp',
};


export const LANGUAGES_REACT_ICONS = {
    javascript: FaJs ,
    typescript: SiTypescript , 
    python: FaPython ,
    java: FaJava ,
    csharp: TbBrandCSharp ,
    php: FaPhp ,
    "c++": TbBrandCpp ,
  };