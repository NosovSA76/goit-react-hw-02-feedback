import React, { Component } from "react";
import { Buttons } from "./components/Buttons/buttons";
import { TitleFeedback } from "./components/Title/title";
import { StatisticTitle } from "./components/StatisticTitle/statistikTitle";
import { StatisticField } from "./components/Statistics/statistics";
import { getBackgroundColor } from "./utils/bacgrond";
import { Section } from "./components/Feedbackboard/feedbackboard";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
      <Section>
        <TitleFeedback text="Please leave feedback" />
        <Buttons onButtonClick={this.handleButtonClick} />
        <StatisticTitle text="Statistic" />
        {total === 0 ? (
          <p>No feedback</p>
        ) : (
          <StatisticField
            good={good}
            neutral={neutral}
            bad={bad}
            totalScore={total}
            goodPercentage={goodPercentage}
            percentage={percentage}
            backgroundColor={backgroundColor}
          />
        )}
      </Section>
    );
  }
}
