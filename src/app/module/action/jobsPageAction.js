import jobsPageService from '../../../redux/services/jobsPageService';

// export const getJobDetails = (parameters) => () =>
// jobsPageService
//   .getJobDetails(parameters)
//   .then(res =>  res.data)
//   .catch({});

export function getJobDetails() {
  // return dispatch => {
    debugger
    return jobsPageService
      .getJobDetails()
      .then(res => res.data)
      .catch({});
  // }
}

