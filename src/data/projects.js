const projects = [
    {
      id: 1,
      title: "Constructora",
      description: "Sistema web completo aplicado a constructoras",
      image: "https://i.ibb.co/TNdb6MZ/Captura-de-pantalla-2025-11-12-150117.jpg",
      link: "https://rikiconstructora.vercel.app/",
      category: "frontend",
      technologies: ["React", "Vite", "tailwind css", "TypeScript","Node.js", "JavaScript"]
    },
    {
      id: 2,
      title: "Gestión Zapatos",
      description: "Sistema web aplicado a gestión de inventario, Casa matriz y sucursale, Dominio y subdominios",
      image: "https://i.ibb.co/ksJX7Cff/payless.jpg",
      link: "https://www.proyect.site/",
      category: "frontend",
      technologies: ["HTML5", "CSS", "Node.js", "JavaScript"]
    },
    {
      id: 3,
      title: "AgroControl",
      description: "Sistema web de gestión y control en huertos verticales y Horizontales",
      image: "https://i.ibb.co/hRd652W0/agro-Control.jpg",
      link: "https://agrocontrol-tan.vercel.app/",
      category: "frontend",
      technologies: ["React", "Vite", "tailwind css", "node.js", "sqlite"]
    },
    {
      id: 4,
      title: "Nicapages",
      description: "Web empresarial nicapages usando react + vite y node.js.",
      image: "https://i.ibb.co/mC5sNV5g/nicpages.png",
      link: "https://www.nicapages.site/",
      category: "frontend",
      technologies: ["React", "Vite", "tailwind css"]
    },
     {
      id: 5,
      title: "Web abogados",
      description: "Pagina web corporativa para abogado institucional",
      image: "https://i.ibb.co/MxGQQvMN/web-veritas.jpg",
      link: "https://www.veritasabogado.com/",
      category: "frontend",
      technologies: ["React", "Vite", "tailwind css"]
    },
    {
      id: 6,
      title: "ETNS Scholl",
      description: "Web corporativa para la academia de ingles ETNS en san marcos",
      image: "https://i.ibb.co/67cXgBCD/ETNSSchool.jpg",
      link: "https://www.etnschool.com/",
      category: "frontend",
      technologies: ["React", "Vite", "tailwind css", "Services plugin"]
    },
    {
      id: 7,
      title: "Cutler Gym",
      description: "Web para gimnasio Cutler fitness gym usando React + vite y Node.js.",
      image: "https://i.ibb.co/Q7HmPjzj/cutler.png",
      link: "https://cutlergym.vercel.app/",
      category: "frontend",
      technologies: ["React", "Vite", "tailwind css"]
    },
    {
      id: 8,
      title: "Portafolio Web",
      description: "Portafolio de Diseño grafico.",
      image: "https://i.ibb.co/MybkdGj5/portafoliomario.png",
      link: "https://portafoliomariosamuel.vercel.app/",
      category: "frontend",
      technologies: ["HTML5", "CSS"]
    },
    {
      id: 10,
      title: "Edu-Incluye",
      description: "Aplicación web para estudio y aprendisaje del lenguaje de señas Nicaraguense",
      image: "https://i.ibb.co/8LTqs8x5/Edu-Incluye.jpg",
      link: "https://edu-incluye.vercel.app/",
      category: "frontend",
      technologies: ["React", "Vite","tailwind css"]
    },
    // --- Backend ---
    {
      id: 9,
      title: "Fast-api",
      description: "Fast api en python para enviar correos con resend.",
      image: "https://i.ibb.co/KcqPG7nd/fastapi.png",
      link: "https://emailapijb.vercel.app/",
      category: "backend",
      technologies: ["HTML5", "Css", "Python", "FastApi"]
    },
    {
      id: 13,
      title: "fast tasko",
      description: "fast api de la apliación tasko, usando python, crud completo y autenticación base de datos en firebase",
      image: "https://i.ibb.co/zhNhsnHP/fasttasko.jpg",
      link: "https://fasfttasko.vercel.app/docs#/",
      category: "backend",
      technologies: ["Python", "FastAPI", "Firebase"]
    },
    {
      id: 14,
      title: "Api insumos barrera",
      description: "Api en ASP.Net usando C#, crud completo",
      image: "https://i.ibb.co/hJnnY9GL/api-insumosbarrera.jpg",
      link: "https://github.com/Benchav/APIRestInsumos.git",
      category: "backend",
      technologies: ["C#", "ASP.NET", "API Rest", "Sql"]
    },
    {
      id: 15,
      title: "Api zapatos",
      description: "Api completa para gestión de zapatos por roles y permisos, usando Node.js y JavaScript",
      image: "https://i.ibb.co/Pkr2dX1/payless-api.jpg",
      link: "https://github.com/Benchav/Payless-Api.git",
      category: "backend",
      technologies: ["Node.js", "JavaScript", "JWT", "Firebase"]
    },
    {
      id: 16,
      title: "Api Constructora",
      description: "Api diseñada en node.js en JavaScript, JWT token, roles y permisos, 13 modelos y su crud completo, protección de rutas y validaciones",
      image: "https://i.ibb.co/sJVvM3NM/api-constructora.jpg",
      link: "https://github.com/Benchav/Api_Constructora.git",
      category: "backend",
      technologies: ["Node.js", "JWT", "MongoDB"]
    },
    {
      id: 17,
      title: "Api insumos",
      description: "Api diseñada en ASP.NET con estructura DDD completa hecha con C#",
      image: "https://i.ibb.co/spp5QFQP/pasteleria-api.jpg",
      link: "https://github.com/Benchav/Isumos.git",
      category: "backend",
      technologies: ["C#", "ASP.NET", "DDD", "Sql"]
    },
    // --- Mobile ---
    {
      id: 11,
      title: "Tasko",
      description: "Aplicación de productividad, gestiòn y organizaciòn de tareas usando React native js y fastapi python",
      image: "https://i.ibb.co/FLncfXVR/Home.jpg",
      link: "https://github.com/Benchav",
      category: "mobile",
      technologies: ["React Native", "FastAPI", "Python", "Firebase"]
    },
    {
      id: 12,
      title: "InsBarrera",
      description: "Apliación de compra de productos pasteles, carrito de compras, compra, inventario usando Flutter y Api en C#",
      image: "https://i.ibb.co/TDq2QfjQ/insbarrera.jpg",
      link: "https://github.com/Benchav/APP_InsBarrera.git",
      category: "mobile",
      technologies: ["Flutter", "Dart", "C# API", "Sql"]
    }
  ];
  
  export default projects;