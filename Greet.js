function greet(name){
    return "Hello, " + name; 
    }
    
   function greet(name, language) {
      switch (language) {
        case 'fr':
          return "Bonjour, " + name;
        case 'is':
          return "Sawubona, " + name;
          case 'se':
          return "Dumela, " +name
        case 'es':
          return "¡Hola, " + name;
        default:
          return "Hello, " + name;
    }
  }

    document.addEventListener('alpine:init', () => {
      Alpine.data('greetingApp', () => ({
        name: '',
        language: '',
        greeting: '',
        sayHello() {
          this.greeting = greet(this.name, this.language);
        }
      }));
    });

    