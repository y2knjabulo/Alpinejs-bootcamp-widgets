function greet(name){
    return "Hello, " + name; 
    }
    
    document.addEventListener('alpine:init', () => {
        Alpine.data('greetingApp', () => ({
          name: '',
          greeting: '',
          sayHello() {
            this.greeting = greet(this.name);
          }
        }));
      });
  
