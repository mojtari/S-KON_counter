import React from "react";
import styles from "./App.module.css";

class App extends React.Component {
  /*
  initial State für den Counter
  */
  state = {
    counterValue: 0,
    isCounting: false,
    intervalId: null,
  };



  /*
  EventHandler zum starten den Zähler
  mittels setInterval wird die counterValue hochgezählt

  */
  startCounter = () => {

    const interval = setInterval(() => {
      this.setState((prevState) => ({
        counterValue: prevState.counterValue++,
        isCounting: true,
        intervalId: interval,
      }));
    }, 500);
  };

  
  /*
   EventHandler zum stoppen den Zähler
   Falls der Counter läuft, wird er gestoppt sonst wird die Methode verlassen.
   */
  stopCounter = () => {
    if (!this.state.isCounting) return;

    clearInterval(this.state.intervalId);

    this.setState({
      isCounting: false,
      intervalId: null
    });
  };



  /*
  EventHandler zum zurücksetzen den Zähler
  */
  resetCounter = () => {
    if (!this.state.isCounting) {
      clearInterval(this.state.intervalId);
      this.setState({
        counterValue: 0,
        intervalId: null
      });
    }else{
      this.setState({
        counterValue: 0,
      });
    }

    
  };

  render() {
    return (
      <div className={styles.App}>
        <header>
          <h1>COUNTER</h1>
        </header>
        <main>
          <div className={styles.counter_display}>
            {this.state.counterValue}
          </div>
          <div className={styles.counter_controlls}>
            <button
              onClick={this.startCounter}
              disabled={this.state.isCounting}
            >
              Start
            </button>
            <button onClick={this.stopCounter}>Stop</button>
            <button onClick={this.resetCounter}>Reset</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
