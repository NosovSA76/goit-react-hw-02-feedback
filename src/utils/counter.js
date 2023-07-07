export function handleButtonClick(buttonType) {
  this.setState(
    (prevState) => {
      return {
        [buttonType]: prevState[buttonType] + 1,
      };
    },
    () => {
      const { good, neutral, bad } = this.state;
      let total = good + neutral + bad;
      let totalScore = good * 1 + neutral * 0.5 + bad * 0;
      let goodPercentage = Math.round((good / total) * 100);
      let percentage = Math.round((totalScore / total) * 100);
      this.setState({ totalScore, percentage, goodPercentage });
    }
  );
}
