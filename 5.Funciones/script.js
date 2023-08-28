function mostrarSemaforo(luz) {
    console.clear(); 
  
    if (luz === "rojo") {
        console.log("   Red   ");
        document.write("<img src = https://biblioteca.acropolis.org/wp-content/uploads/2014/12/verde.png>")
    } else if (luz === "amarillo") {
        console.log("   Yellow   ");
        document.write("<img src = data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgIBwcICAgIBwcHBwoHBwcHBw8ICQcKFREWFhURHxMYHSggGBolGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDysZFRkrNy0rKysrLSsrKysrNysrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAK4BIgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAGBABAQEBAQAAAAAAAAAAAAAAAAERMUH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQcF/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AOlgMkdgBAAAAAAQUAQAAAQFEAUQBRAFAAABRBRQBAAFEUAAAAAABAAAABBQBABAAAAEAAAAAAABRRFAAAVBRQAABFAAAABAAAABUAQASgAAAiAAAAKAAACKIoACiiKAACiRVAAQiooAACKgAACVUFAEBFQAABFEEFQABFAFAAAARQAFQUUABUVQAEFRQAAEVKAAAioKAIAAAAIKgAAIKAiggAAAAAAEFUAAFRVAAQVFAAASqAgAAAIAigCgAAUEEAAAABQQVAAAAUEUAAIAoKAAhFAAAAAEFQAABFBUAAAQAAEUBFSKACAoAIKARScFRBUFFRQAAFRRAAAAAABFAQAAAURQEAQAFABAAAAAAUAEFnA8FQRQUAAAEFAAAAAEEAXTUEFQQVRNNBRAFEAVABUQSiiBRRAoqshRRAourrKrRdNQKLogUU1AGtNQBdEBFVkUAEURQEFQAAABARQEFAQUBBQEFAQUBBQEFAAAAFAABQAAAAAAAAAAAAAABBQEFAQUBBQEFAQUBBQEFAAAAAAAAAAAAAf/2Q==>")
    } else if (luz === "verde") {
        console.log("   Green   ");
        document.write("<img src = https://us.123rf.com/450wm/claudiodivizia/claudiodivizia1612/claudiodivizia161202351/69663467-papel-de-color-rojo-%C3%BAtil-como-fondo-vertical.jpg>")
    }
  }
  
  function cambiarSemaforo() {
    setTimeout(function () {
      mostrarSemaforo("verde");
      setTimeout(function () {
        mostrarSemaforo("amarillo");
        setTimeout(function () {
          mostrarSemaforo("rojo");
          cambiarSemaforo(); 
        }, 2000); 
      }, 2000); 
    }, 2000); 
  }
  
  cambiarSemaforo();