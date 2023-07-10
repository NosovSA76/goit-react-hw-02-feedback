import React, { Component } from "react";
import { ButtonsFeedback } from "./components/ButtonsFeedback/buttonsFeedback";
import { TitleStatistic } from "./components/StatisticTitle/statistikTitle";
import { getBackgroundColor } from "./utils/bacgrond";
import { BoardFeedback } from "./components/Feedbackboard/feedbackboard";
import { FieldStatistic } from "./components/Statistics/statistics";
import { TitleFeedback } from "./components/Title/title";

export class App extends Component {
  state = {
    bad: 0,
    good: 0,
    neutral: 0,
  };

  handleButtonClick = (buttonType) => {
    this.setState((prevState) => {
      return {
        [buttonType]: prevState[buttonType] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    let totalScore = good * 1 + neutral * 0.5 + bad * 0;
    let goodPercentage = Math.round((good / total) * 100);
    let percentage = Math.round((totalScore / total) * 100);
    const backgroundColor = getBackgroundColor(percentage, total);

    return (
      <BoardFeedback>
        <TitleFeedback text="Please leave feedback" />
        <ButtonsFeedback onButtonClick={this.handleButtonClick} />
        <TitleStatistic text="Statistic" />
        {total === 0 ? (
          <p>No feedback</p>
        ) : (
          <FieldStatistic
            good={good}
            neutral={neutral}
            bad={bad}
            totalScore={total}
            goodPercentage={goodPercentage}
            percentage={percentage}
            backgroundColor={backgroundColor}
          />
        )}
      </BoardFeedback>
    );
  }
}
