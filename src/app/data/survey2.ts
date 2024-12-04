

export const json = {
  title: "Experiment on Financial Behavior and Anonymity",
  description: "A study on how anonymity influences financial decision-making.",
  logoPosition: "right",
  completedHtml: "<h3>Thank you for participating in this experiment!</h3>",
  pages: [
    {
      name: "intro",
      elements: [
        {
          type: "html",
          name: "introduction",
          html: "<p>In this experiment, we aim to understand how different contexts affect financial decision-making. Please respond honestly; there are no right or wrong answers.</p>",
        },
      ],
    },
    {
      name: "group_info",
      title: "How your data will be used",
      elements: [
        {
          type: "html",
          name: "group_notification",
          visibleIf: "{experiment_group} = 'anonimo'",
          html: "<p>The information you provide will be kept anonymous and confidential. Your responses will be used for research purposes only in aggregated manner.</p>",
        },
        {
          type: "html",
          name: "group_notification",
          visibleIf: "{experiment_group} = 'non_anonimo'",
          html: "<p>The information you provide will be kept confidential and will only be used for research purposes. <div class='alert alert-danger'>You will share only your <b>name, surname and your budget distribution</b> (marked question)</div> Your responses will not be shared with any third parties.</p>",
        },
      ],
    },
    {
      name: "demographics",
      elements: [
        {
          type: "dropdown",
          name: "age_group",
          title: "Select your age group:",
          isRequired: false,
          choices: [
            { value: "18_25", text: "18-25" },
            { value: "26_35", text: "26-35" },
            { value: "36_45", text: "36-45" },
            { value: "46_60", text: "46-60" },
            { value: "60_plus", text: "Over 60" },
          ],
        },
        {
          type: "radiogroup",
          name: 'gender',
          title: "What is your gender?",
          isRequired: false,
          choices: [
            { value: "male", text: "Male" },
            { value: "female", text: "Female" },
            { value: "prefer_not_to_say", text: "Prefer not to say" },
          ],
        },
        {
          type: "dropdown",
          name: "education",
          title: "What is your highest level of education?",
          isRequired: false,
          choices: [
            { value: "no_degree", text: "No degree" },
            { value: "high_school", text: "High School Diploma" },
            { value: "bachelor", text: "Bachelor's Degree" },
            { value: "master", text: "Master's Degree" },
            { value: "doctorate", text: "Doctorate" },
          ],
        },
        {
          type: "dropdown",
          name: "employment_status",
          title: "What is your current employment status?",
          isRequired: false,
          choices: [
            { value: "unemployed", text: "Unemployed" },
            { value: "student", text: "Student" },
            { value: "employed", text: "Employed" },
            { value: "retired", text: "Retired" },
          ],
        }
      ],
    },
    {
      name: "personal_finance_questions",
      elements: [
        {
          type: "matrix",
          name: "financial_priorities",
          title:
            "Please indicate how important the following financial goals are to you:",
          columns: [
            { value: 1, text: "Not important" },
            { value: 2, text: "Slightly important" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Important" },
            { value: 5, text: "Very important" },
          ],
          rows: [
            { value: "saving", text: "Saving for the future" },
            { value: "paying_bills", text: "Paying monthly bills" },
            { value: "entertainment", text: "Entertainment and leisure" },
            { value: "education", text: "Education or self-improvement" },
            {
              value: "donations",
              text: "Making donations or charitable contributions",
            },
            { value: "investing", text: "Investing in assets or stocks" },
          ],
        },
        {
          type: "radiogroup",
          name: "financial_control",
          title: "How do you typically manage your personal finances?",
          choices: [
            { value: "manual", text: "Manually (e.g., cash or spreadsheets)" },
            { value: "apps", text: "Using apps or financial tools" },
            {
              value: "no_control",
              text: "I don't actively manage my finances",
            },
          ],
        },
        {
          type: "matrix",
          name: "spending_frequency",
          title: "How often do you allocate funds to the following categories?",
          columns: [
            { value: 1, text: "Never" },
            { value: 2, text: "Yearly" },
            { value: 3, text: "Quarterly" },
            { value: 4, text: "Monthly" },
            { value: 5, text: "Weekly" },
            { value: 6, text: "Daily" },
          ],
          rows: [
            { value: "housing", text: "Housing or rent" },
            { value: "food", text: "Food and groceries" },
            { value: "health", text: "Healthcare" },
            { value: "transportation", text: "Transportation" },
            { value: "entertainment", text: "Entertainment" },
            { value: "saving", text: "Saving" },
            { value: "donations", text: "Donations" },
          ],
        },
        {
          type: "text",
          name: "monthly_income",
          title: "What is your approximate monthly income?",
          inputType: "number",
          isRequired: true,
          validators: [{ type: "numeric", minValue: 0 }],
        },

      ],
    },
    {
      name: "budget_allocation",
      title: "Budget Allocation",
      elements: [
        {
          type: "html",
          name: "budget_allocation_intro",
          visibleIf: "{experiment_group} = 'non_anonimo'",
          html: "<div class='alert alert-danger'>Shared result!</div>",
        },
        {
          type: "matrix",
          name: "budget_distribution",
          isRequired: true,
          title:
            "Imagine you received 1000€ to allocate for a month. How would you distribute it among the following categories? (Enter percentages that sum to 100%) {{multiRange}}",
        },
      ]
    },

    {
      name: "habits",
      title: "Habits and Preferences",
      elements: [
        {
          type: "boolean",
          name: "smoking",
          title: "Do you smoke?",
        },
        {
          type: "text",
          name: "smoking_expense",
          title: "If yes, how much do you spend on smoking per month?",
          visibleIf: "{smoking} = true",
          inputType: "number",
          validators: [{ type: "numeric", minValue: 0 }],
        },
        {
          type: "boolean",
          name: "alcohol",
          title: "Do you consume alcohol?",
        },
        {
          type: "text",
          name: "smoking_expense",
          title: "If yes, how much do you spend on alcohol per month?",
          visibleIf: "{alcohol} = true",
          inputType: "number",
          validators: [{ type: "numeric", minValue: 0 }],
        },
        {
          type: "boolean",
          name: "hobby_spending",
          title: "Do you have a specific spending hobby that accounts for more than 10% of your income?",
        },
      ],
    },
    {
      name: "non_anonymous_info",
      title: "Personal Information",
      visibleIf: "{experiment_group} = 'non_anonimo'",
      elements: [
        {
          type: "html",
          name: "budget_allocation_intro",
          visibleIf: "{experiment_group} = 'non_anonimo'",
          html: "<div class='alert alert-danger'>Shared result!</div>",
        },
        {
          type: "text",
          name: "name",
          title: "Please enter your first name:",
          isRequired: true,
        },
        {
          type: "text",
          name: "surname",
          title: "Please enter your last name:",
          isRequired: true,
        },
      ],
    },

  ],
  "calculatedValues": [{
    "name": "fullWage",
    "expression": "{monthly_income} * 2"
  }],
  showProgressBar: "top",
  progressBarType: "questions",
  goNextPageAutomatic: false,
  showQuestionNumbers: "on",
  questionTitleLocation: "top",
  sendResultOnPageNext: true,
};