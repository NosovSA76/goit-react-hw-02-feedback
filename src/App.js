import React, { Component } from "react";
import { Buttons } from "./components/buttons/buttons";
import { TitleFeedback } from "./components/title/title";
import { StatisticTitle } from "./components/statisticTitle/statistikTitle";
import { StatisticField } from "./components/statistics/statistics";
import { handleButtonClick, getBackgroundColor } from "./utils";
import { Section } from "./components/feedbackboard/feedbackboard";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    totalScore: 0,
    percentage: 0,
    goodPercentage: 0,
  };

  handleButtonClick = (buttonType) => {
    handleButtonClick.call(this, buttonType);
  };

  render() {
    const { good, neutral, bad, percentage, goodPercentage } = this.state;
    const total = good + neutral + bad;
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
