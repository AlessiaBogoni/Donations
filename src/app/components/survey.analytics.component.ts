import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import { Model } from "survey-core";
import { VisualizationPanel } from "survey-analytics";
declare var SurveyTheme: any;

@Component({
  selector: "survey-analytics",
  template: `
    <div id="surveyAnalyticsContainer"></div>
  `,
})
export class SurveyAnalyticsComponent implements OnInit {
  @Input() surveyJson: any;
  @Input() results: any;
  @Output() surveySaved: EventEmitter<Object> = new EventEmitter();
  ngOnInit() {
    const survey = new Model(this.surveyJson);

    survey.applyTheme(SurveyTheme.ContrastDark);

    const visPanel = new VisualizationPanel(
      survey.getAllQuestions(),
      this.results
    );
    visPanel.render(document.getElementById("surveyAnalyticsContainer"));
  }
}
