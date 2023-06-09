// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // RAGNAR_API: 'https://api.runragnar.com', /* CMS v1 */
  RAGNAR_API: 'https://dev-api.ragnarlife.com' /* CMS v3 */,
  registrationsConfigBaseUrl:
    'https://jormc3na7h.execute-api.us-west-2.amazonaws.com/staging',
  registrationsBaseUrl:
    'https://496pwdxkk9.execute-api.us-west-2.amazonaws.com/staging',
  teamsBaseUrl:
    'https://xcs4azisal.execute-api.us-west-2.amazonaws.com/staging',
  promoCodesBaseUrl:
    'https://bmhiutei5j.execute-api.us-west-2.amazonaws.com/staging',
  customFieldsBaseUrl:
    'https://ztm0mj6t5c.execute-api.us-west-2.amazonaws.com/staging/custom-fields',
  jobsBaseUrl: 'https://bh1fqbdu13.execute-api.us-west-2.amazonaws.com/staging',
  usersBaseUrl:
    'https://8xp7ekvvx9.execute-api.us-west-2.amazonaws.com/staging',
  teamCenterBaseUrl:
    'https://7p8xe0mov8.execute-api.us-west-2.amazonaws.com/staging',
  runnerBaseUrl:
    'https://aasbjrt7x9.execute-api.us-west-2.amazonaws.com/staging',
  reportingBaseUrl:
    'https://7bam38dfql.execute-api.us-west-2.amazonaws.com/staging',
  auditLogsBaseUrl:
    'https://c6xb68hqvb.execute-api.us-west-2.amazonaws.com/staging',
  apiKey:
    'b7f5361ab446b480f62d2774ef174b30c4f2e5ae109758382ce300037e6d80eaaaefba0621ef046f2d3b0ed0',
  authorizeNet: {
    clientKey:
      '97gntGyYaD37896TFRgm623wfQ7JgcgqU8euETHHrE4wY2SFsfqZWm9W5B9j7we8',
    apiLoginID: '68W5nXmttLh',
  },
  profilesBaseUrl:
    'https://zvoj73jyy4.execute-api.us-west-2.amazonaws.com/staging',
  profilesApiKey:
    'b7f5361ab446b480f62d2774ef174b30c4f2e5ae109758382ce300037e6d80eaaaefba0621ef046f2d3b0ed0',
  adminCognitoRegion: 'us-west-2',
  adminCognitopoolId: 'us-west-2_fZCEM2UUM',
  adminCognitoClientId: '15l159fouaa4298jpfv9o41c4p',

  hubAdminBaseUrl:
    'https://s3-us-west-2.amazonaws.com/ragnar-hub-ui-v2/index.html',
  hubUserBaseUrl:
    'https://s3-us-west-2.amazonaws.com/ragnar-hub-ui-v2/index.html',
  domesticBaseUrl: 'https://dev.runragnar.com/teamcenter',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
