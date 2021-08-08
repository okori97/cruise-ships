(function exportController() {
  function Controller(ship) {
    this.ship = ship;
    this.initialiseSea();

    document.querySelector("#sailbutton").addEventListener("click", () => {
      this.setSail();
    });

    var form = document.querySelector("#portForm");
    if (form.attachEvent) {
      form.attachEvent("submit", this.addPort);
    } else {
      form.addEventListener("submit", this.addPort);
    }
  }

  Controller.prototype = {
    initialiseSea() {
      const backgrounds = ["./images/water0.png", "./images/water1.png"];
      let backgroundIndex = 0;

      window.setInterval(() => {
        document.querySelector("#viewport").style.backgroundImage = `url('${
          backgrounds[backgroundIndex % backgrounds.length]
        }')`;
        backgroundIndex += 1;
      }, 1000);
    },

    renderPorts(ports) {
      var portsElement = document.querySelector("#ports");
      portsElement.style.width = "0px";

      ports.forEach((port, index) => {
        const newPortElement = document.createElement("div");
        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;
        newPortElement.className = "port";

        portsElement.appendChild(newPortElement);

        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
      });
    },

    renderShip() {
      const ship = this.ship;

      const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portElement = document.querySelector(
        `[data-port-index='${shipPortIndex}']`
      );

      const shipElement = document.querySelector("#ship");
      shipElement.style.top = `${portElement.offsetTop + 32}px`;
      shipElement.style.left = `${portElement.offsetLeft - 32}px`;
    },

    setSail() {
      const ship = this.ship;
      const departingPort = ship.currentPort.name;
      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextportElement = document.querySelector(
        `[data-port-index='${nextPortIndex}']`
      );
      if (!nextportElement) {
        return this.renderMessage("End of the line!");
      }

      const shipElement = document.querySelector("#ship");
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);

        if (shipLeft === nextportElement.offsetLeft - 32 && nextportElement) {
          ship.setSail();
          ship.dock();
          const arrivingPort = ship.currentPort.name;
          this.renderHUD(arrivingPort);
          this.renderMessage(`You have now arrived at ${arrivingPort}`);
          clearInterval(sailInterval);
        }
        shipElement.style.left = `${shipLeft + 1}px`;
      }, 20);

      this.renderMessage(`Now departing from ${departingPort}`);
    },

    renderMessage(message) {
      let viewport = document.querySelector("#viewport");
      const messageElement = document.createElement("div");
      messageElement.id = "message";
      messageElement.innerHTML = `${message}`;

      viewport.appendChild(messageElement);

      const messageInterval = setTimeout(() => {
        viewport.removeChild(messageElement);
        clearTimeout(messageInterval);
      }, 2 * 1000);
    },

    renderHUD(name) {
      const ship = this.ship;
      const currentPortHUD = name || ship.currentPort.name;

      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPortHUD = ship.itinerary.ports[nextPortIndex].name;

      let HUD = document.querySelector("#HUD");
      const currentPortInfo = document.createElement("div");
      const nextPortInfo = document.createElement("div");
      currentPortInfo.innerHTML = `Current Port : ${currentPortHUD}`;
      nextPortInfo.innerHTML = `Next Port : ${nextPortHUD}`;

      HUD.appendChild(currentPortInfo);
      HUD.appendChild(nextPortInfo);
      if (HUD.children.length > 2) {
        while (HUD.children.length > 2) {
          HUD.removeChild(HUD.firstChild);
        }
      }
    },

    addPort(e) {
      if (e.preventDefault) e.preventDefault();
      var name = document.querySelector("#portname").value;
      console.log(`${name}`);

      console.log(ship.itinerary.ports);

      const port = {
        name: name,
        ships: [],
      };

      ship.itinerary.ports.push(port);
      console.log(ship.itinerary.ports);
      console.log(port);
      console.log(ship);

      return false;
    },
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
