(function(n){"use strict";function i(n,t){var r;if(typeof n=="object"&&typeof t==
"object")for(r in t)t.hasOwnProperty(r)&&(n[r]?i(n[r],t[r]):n[r]=t[r]);return n}
function u(n,t,r){n[t]=n[t]||{};i(n[t],r)}var t={},r;i(n,{Resources:{getResources:
function(){}}});r=n.Resources.getResources;n.Resources.getResources=function(n){
return r(n)||t[n]},function(){function n(){u(t,"Microsoft.MetaAnalytics.Web.ClientResources",
{columnPickerIndicesMustBeGreaterThan:"Indices must be greater than 0",fxshell_logviewer_errors:
"Errors",standardWorkspace:"Standard workspace",recentWorkLastPublishedHeaderCreationTime:
"Created On",search:"Search",invitationEmailSubjectTemplate:'Invitation from Microsoft Azure Machine Learning Studio to workspace "{0}"',
fxs_fxsDrawerTaskbar_newButton:"New",signUp:"Sign Up",signIn:"Sign In",savingIntermediateOutputFailed:
"Saving intermediate output failed. ",fxs_fxsSubscriptionPicker_selectAll:"Select All",
openNotebookFailed:"Opening notebook failed. Notebook id: {0}. {1}",uploadModuleMenuDescription:
"Upload a custom module zip package",apiCodeDialogShortCodeLabel:"This dataset",
modelPackageConfigFriendlyName:"Description",moduleErrorShowDetails:"SHOW DETAILS",
notebookExtensionNotebookTitle:"Notebooks",uploadModuleDialogDataToUpload:"Select a zip file to upload:",
recentWorkThumbnailLabel:"Preview",webServiceGroupNameLabel:"Name",azureSubscriptionDisabledTitle:
"Azure Subscription Disabled",notebookServiceUnavailable:"Notebook service is currently unavailable.",
imageUploadProcessingText:"Processing your image, please wait.",listExperimentsPivotDisplayName:
"All",copyExperimentCurrentWorkspacePrefix:"(current) ",fxs_fxsCustomerSupport_supportPlanFormatString:
"{0}: {1}",viewErrorLog:"View error log",welcomeInfo6MoreCaption:"View all...",saveAsTrainedModel:
"Save as Trained Model",treeEnsembleGainPValue:"gain p-value",uploadModuleDialogDescription:
"Module description",workspaceNameInvalidErrorMessage:"The field can contain only letters, numbers, and hyphens.",
parameterRangeErrorTooManyPoints:"Number of points cannot exceed the full range of integers ({0})",
trialDialogDisabledFeatureTitle:"Feature not available",copyExperimentFromGalleryGeoRegions:
"REGION:",whatCanWeImprove:"Is there something we can do better?",workspacePageStorageLearnMore:
"learn more",duplicatePortName:"Duplicate port name: {0}",guidedExperimentVisualizeContent:
"After the run, we can see the prediction results on the test dataset in the “Scored Labels” column and the “Scored Probabilities” column.",
copyExperimentFromGalleryDialogDestinationWorkspace:"Select a workspace to copy this experiment into:",
viewOutputLog:"View output log",fxs_fxsCustomerSupport_chooseSupportType:"Choose an option",
invitationEmailTemplate:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN\\" \\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html><head><title>Microsoft ML Studio Invitation<\/title><\/head><body><p>Hello from Microsoft Azure Machine Learning Studio.<\/p><p>{0} has invited you to the workspace called “{1}” on ML Studio. The role you will have on this workspace is {3}. ML Studio allows multiple users to collaborate with each other on data experiments.<\/p><p>To accept the invitation, click on the link below and sign in using the email to which this invitation was sent. This email must be a Microsoft Account email to use this invitation.<\/p><p><center><h2><a href="{2}">Accept the Invitation<\/a><\/h2><\/center><\/p><p>If you have problems accepting this invitation, please contact the owner of the workspace who sent you this invitation so they can work with Microsoft to resolve any issues.<\/p><p>If you do not want to accept this invitation, please ignore this email.<\/p><p>Thank you for using Microsoft ML Studio.<br/>The ML Studio team.<\/p><p>________________________________________<br/>Do not reply to this message as this email address is not monitored.<br/>Your privacy is important to us and you can read our latest <a href="http://www.windowsazure.com/en-us/support/legal/privacy-statement/">Windows Azure Privacy Statement online<\/a>.<\/p><p>Microsoft Corporation<br/>One Microsoft Way<br/>Redmond, WA 98052<\/p><\/body><\/html>',
modelPackageConfigColumnSchemaTemplate:"{0} ({1})",fxs_fxsNotification_warning:"Warning",
fxshell_logviewer_title:"Diagnostic Log",notebookPlusNewBlankPython2NotebookLabel:
"Python 2",notebookPlusNewBlankPython3NotebookLabel:"Python 3",workspaceDisabledTitle:
"Workspace Disabled",runHistory:"Run History",primaryAuthToken:"Primary Authorization Token",
newExperimentMenuViewMoreInGallery:"VIEW MORE IN GALLERY",StorageKeyOutOfSyncErrorMessage:
"Please resync the access keys for storage account {2}. Request ID: {0} {1}",moduleErrorDialogButtonLabel:
"View error log",SaveTrainedModel:"Save trained model",guidedExperimentMachineLearningModulesTitle:
"machine learning modules",publishExperimentToCommunitySharePromotionText:"Check out my machine learning experiment on {0}",
fileEmpty:"The selected file is empty",publishExperimentToCommunityTagsLabel:"Tag Your Content",
fxshell_logviewer_clearLog:"Clear Log",fxs_fxsSupportGrid_dateColumn:"Date Created",
fxshell_logviewer_regExFilter:"RegEx Filter:",newDataGatewayDescriptionLabel:"Description",
VisualizationProbabilityDensity:"probability density",guidedExperimentDatasetContent:
"We start with a sample dataset of adult census and income information. We could also use “Reader” to connect to various data sources.",
addNewDataGatewayChoice:"(add new Data Gateway...)",webServiceGroupDashboardParentExperimentViewLatest:
"View latest",experiment:"Experiment",animatedExperimentStep1Content:"This sample dataset contains census and income information of about 32,000 individuals.",
confirmDeleteWebServiceGroup:'Are you sure to delete the web service "{0}"?',publishWebServiceWithTrainedModelWarning:
"Click on the appropriate trained model nodes output port menu to begin web service creation.",
createScoreTutorialDataFlowTitle:"SEE HOW DATA FLOWS",treeEnsembleStatistics:"Statistics",
visualizationStatisticMax:"Max",visualizationStatisticMin:"Min",publishExperimentToCommunityConsentCustomModulesLabel:
"Custom Modules in this experiment will also be published.",publishExperimentToCommunityPublishedExperimentHeader:
"Your experiment has been published",binaryClassificationScoreBin:"Score Bin",infoErrorRequestId:
"Request id: {0}",networkErrorNotification:"A network error has occurred. Please try again.",
experimentEditorContextMenuViewPriorRun:"View Prior Run",modelExperimentName:"Experiment name must contain at least one non-whitespace character.",
binaryClassificationScoredDatasetDefault:"Dataset",fileTooLarge:"The selected file is too large. The maximum allowed size is {0}",
signoutErrorMessage:"An error occured while signing out",avatarBar_privacyLabel:
"Windows Azure Privacy Statement",frequencyLogScale:"frequency log scale",fxshell_logviewer_warnings:
"Warnings",secondaryAuthToken:"Secondary Authorization Token",createScoreCommandTourTitle:
"Create Predictive Experiment",renameNotebookFailed:"Renaming notebook failed. {0}",
dataCategoryDescription:"Easily deploy and run Windows Server and Linux virtual machines. Migrate applications and infrastructure without changing existing code.",
fxshell_feedback_design:"Do you like the design?",uploadModuleDialogSupportedLanguageR:
"R",webServiceSampleDataEnabled:"Enable Sample Data?",helpSearchPlaceholder:"Search Help Content",
publishWebServiceModuleVersionIsOld:"One or more modules in your experiment need to be upgraded before the experiment can be published. See the help topic ‘Publishing the Experiment’ for more information.",
apiCodeDialogUseSecondaryTokenLabel:"Use Secondary Token",copyExperimentDialogCopyExperiment:
"Copy Experiment",createScoreTutorialDataFlowContent:"Click here to compare how data flows in the experiment and in the web service",
binaryClassificationNegativePrecision:"Negative Precision",publishExperimentToCommunityPublicPublishExplanationLabel:
"Anyone can view and copy the experiment. Once public, it cannot be unlisted.",renameNotebookDialogSameNameError:
'"A notebook with this name already exists"',fxs_fxsDrawerProgress_activeMultiple:
"{0} operations are currently running",fxs_fxsDrawer_close:"Close",binaryClassificationScoredDatasetToCompare:
"Scored dataset to compare",HelpIDAlphabeticalModuleList:"DFDCB393-0285-4A60-A2BD-7C79F80E4D20",
exceptionOccurred:"Exception occurred",notebookPlusNewNotebookTitle:"Notebook",webServiceEndpointCountColumnTitle:
"Endpoints",welcomeInfo2Link4CaptionPublishingExperiments:"Publishing Web Service (API)",
fxs_fxsCustomerSupport_technical:"Technical",guidedTourCommandsTitle:"Commands",
VisualizationCumulativeDistribution:"cumulative distribution",failedToDeleteExperiments:
"{0} of {1} selected experiments cannot be deleted.",zoomIn:"Zoom in (= key)",rOutputGraphicsDevice:
"Graphics Device",homeWelcomeDescriptionAnonymous:"No {0}? No credit card? No problem! Choose anonymous Guest Access, or sign in with your work or school account, or a Microsoft account.",
submittedBy:"Submitted by",dataGatewayRegistered:"Gateway registered",webServiceNotReady:
"The service is being configured and is not yet ready to test. Please wait a few seconds and then try again.",
Impl_UI_Notifications_DataLoad_portalDataLoadWarnings:"Warnings encountered loading management data.",
trialDialogExceededModuleRuntimeLimitDescription:"Looks like you are trying to run a module for more than {0} minutes. This feature is disabled in the Trial version of Azure Machine Learning. To enable it, please sign in with a {1}.",
anonymousWorkspaceExpirationNotice:"You will have 24 hours to sample what Microsoft Azure Machine Learning has to offer.  If you love it, sign up for a FREE account.",
fxshell_avatarbar_legalLabel:"Legal",welcomeInfo4Link3CaptionModels:"Visit the Model Gallery",
uploadDatasetDialogSelectType:"Select a type for the new dataset:",HomePageIntroduceText:
"Introducing",floatGreaterThanMax:'The value {0} is greater than maximum of {1}."',
feedbackMinimizePopup:"Minimize",trialDialogParallelRunDisabledTitle:"We've hit a little snag",
deleteTrainedModelBlockedByDependencies:"This trained model cannot be deleted because there are web services depending on it.",
webServiceDiagnosticsModeNone:"No",toggleToExperimentViewTooltip:"Click to switch to experiment view",
viewExperimentLineage:"View Experiment Lineage",saveTrainModuleStepTitle:"Saving updated trained model",
deleteNotebookFailed:"Could not delete notebook {0}. {1} ",runningExperimentMessageTitle:
"Running experiment",tryAnonymousWorkspace:"Test Drive",dataset:"Dataset",competitionSubmissionErrorMultiInputPorts:
"Competition only supports one input.",experimentStateFinishedRunning:"Finished running",
notebookErrorNotFound:"The notebook could not be found.",ChooseAndEllipsis:"Choose...",
errorServiceUnavailableTitle:"AzureML is unavailable",welcomeInfo6Link4CaptionMLCenter:
"Machine Learning Center",guidedTourDrawerTitle:"Create an experiment",StorageAccountDeletedErrorMessage:
"Please verify storage account {2} exists. Request ID: {0} {1}",valueDoesNotMatch:
"The value {0} does not match one of the following: {1}.",unexpectedError:"Unexpected error happened.",
competitionSubmissionErrorExperimentMissingTrainedModel:"The experiment linked to the staging web service does not have trained model.",
commandsViewRunHistory:"Run History",uploadTransformDialogDescription:"Provide an optional description:",
errorDialogFeedbackTextBoxPlaceholder:"You can add optional feedback details here",
trialDialogExpiringTrialDescription:"Hey, just a reminder that when your trial ends in less than {0} hours you'll lose your work. But the free version of Azure Machine Learning has no time limit and lets you save experiments. To switch, just sign in with a {1}.",
webServiceDownloadExcelSampleDataConfirmationTitle:"Sample Data",competitionStatusSubmitWebService:
"Web Service Submitted",viewDataflow:"View Dataflow",uploadingCompleted:"Upload of the dataset '{0}' has completed.",
UnhandledExceptionTitle:"Sorry, the Studio ran into a problem.",lastModified:"Last Modified",
welcomeInfoWesternEuropeBlog:"Azure ML goes to Western Europe",welcomeInfo5Link1CaptionAlphabeticalList:
"List of modules",fxshell_logviewer_information:"Information",helpSearchNoResults:
"No results for ",webServiceRRTypeTitle:"Request Response Web service",navbarChat:
"Chat",apiCodeDialogTitle:"Use this code to access your data",navbarTour:"Tour",
mlnotebookText:"Jupyter",experimentListPivotQuickStarts:"quick starts",nodeCannotDisconnectOutsideExperiment:
"Can't disconnect graph node outside of an experiment.",ExperimentDefaultTitle:"Experiment created on {0}",
fxs_fxsSupportGrid_noIncidents:"No incidents found.",AccountNotAuthorizedViaMicrosoftConnect:
"Account not authorized via Microsoft Connect",welcomeInfoCopyExperimentsAcrossWorkspaces:
"How to copy experiments",dataGatewayInstallHereText:"Install and auto-register on this computer",
learnerSettingsName:"Setting",webServiceLearnMore:"Learn more",discard2:"Discard",
workspaceSelectorAvailableWorkspaces:"WORKSPACE:",publishNotebookVisibilityPublicExplanation:
"Anyone can view and copy the notebook. Once public, it cannot be unlisted.",registered:
"Registered",welcomeInfoNYCTaxiDataset:"Build ML models on NYC Taxi Data",notifications_buttons_cancel:
"Cancel",dataGatewayFailedGetEnterCredsURL:"Unable to start username and password entry. Ensure the data gateway is registered and online.",
zoomOut:"Zoom out (- key)",fxs_fxsWizard_complete:"Complete",competitionSubmissionWizardStep2Errors:
"Errors",newExperimentMenuLoading:"Loading...",feedbackIsThereSomethingWeCanDoBetter:
"Is there something we can do better?",azureTermsOfServiceLink:"//go.microsoft.com/fwlink/?LinkID=517834",
webServiceGroupPrimaryApiKeyLabel:"API key",navbarFeedbackFrownText:"Send a frown",
gallery:"Gallery",productName:"ML Studio",parameterRangeInvalidRange:"The entered range is invalid",
RefreshStatus_FailedRetrying:"Refresh status failed ... Retrying.",homeWelcomeSignIn:
"Get started now",publishNotebookErrorTitle:"An error occurred when publishing the notebook.",
feedbackAndFeatureRequest:"Provide feedback and request features",experimentSaveAsDialogHeading:
"Save As",datasetUploadFailed:"Dataset upload failed.",experimentStateRunningHover:
"Your experiment is running",VisualizeDisabledTooltip:"You must run this experiment to enable Visualize",
rocFalsePositive:"False Positive",copyForNewExperimentName:" - Copy",notebookLanguagePython2:
"Python 2",notebookLanguagePython3:"Python 3",samples:"Samples",webServiceGroupDashboardWsUrlHeader:
"URL",trialDialogExpiredTrialTitle:"Time’s up",createdTrainedModelStepTitle:"Created trained model from training experiment",
fxs_fxsWizard_previous:"Previous",welcomeInfo2Link3aCaptionQuickStartForPython:"Quick start for Python",
treeEnsembleTreesConstructed:"trees constructed",fxs_fxsCustomerSupport_premierLinkText:
"Microsoft Premier customer support",modelCannotQueueSubmit:"Cannot queue submit, since a discard operation is underway.",
competitionReleaseBlogEntry:"New Azure ML Competitions",experimentGridHeaderName:
"Name",navbarSubmitFeedback:"Submit Feedback",guidedTourClickHere:"click here",location:
"Location",competitionSubmissionErrorExceededSubmissionLimit:"You have exceeded the number of allowed submissions for the day.",
regressionMetricRelativeSquaredError:"Relative Squared Error",floatLessThanMin:"The value {0} is less than minimum of {1}.",
startYourFreeAccount:"Start your free account",uploadDatasetMenuDescription:"Upload a dataset from a local file",
ChooseDatasetToDeprecateAndEllipsis:"Select dataset to deprecate...",selectTrainingModuleConfirmationDetails:
"There are more than one training module in the experiment. You must select only one training module to continue creating predictive experiment.",
validationInvalidDataGateway:"The Data Gateway is not valid.",deleteItem:"Delete",
navbarMobileForum:"Forums",copyExperimentFromGalleryDialogDestinationWorkspaceMultiGeo:
"WORKSPACE:",modelExperimentCannotRun:"Your experiment cannot be run because it has been updated in another session. Please re-open this experiment to see the latest version.",
rocF1Score:"F1 Score",modelPackageConfigSettings:"settings",notifications_buttons_yes:
"Yes",welcomeInfo2Link3CaptionQuickStartForR:"Quick start for R",webServiceApiNotAvailable:
"API not available",validationTheValueDoesNotMatchTheFollowing:"The value {0} does not match one of the following: {1}.",
fxs_fxsProgressBox_error:"Error",deleteCredentials:"Delete Credentials",competitionStatusCreateScoringExperiment:
"Predictive Experiment Created",datasetCategoryDescription:"Find and upload datasets to use in {0} experiments",
fxs_fxsCustomerSupport_errorRdfeMintMissmatch:"There was an error validating account owner of subscription.",
publishExperimentToCommunitySharePromotionTitle:"Check out my experiment",experimentEditorContextMenuSetAsPublishInput:
"Set as Publish Input",visualize:"Visualize",workspaceNotFoundModelAboutMicrosoftAzureML:
"About Microsoft Azure ML",publishExperimentToCommunityPublishedExperimentLinkLabel:
"Link To Published Experiment",guidedTourCommandsContent:"You'll find experiment commands such as save, delete, run, and publish. ",
selectToolRulesDisplayLabel:"Selected columns:",prepareWebServiceCommandTitle:"Retraining Web Service",
trialDialogLearnMore:"Learn more",workspaceNotFoundModelContactSupportLink:"http://go.microsoft.com/fwlink/?LinkID=403794",
workspaceBarRenameWorkspace:"Rename Workspace",fxshell_feedback_comments:"Comments",
statsAndGraphsTitle:"Statistics and Visualizations",copyExperimentFromGalleryDialogDestinationRegionMultiGeo:
"REGION:",moduleErrorForumLink:"go to the forum for additional help.",failedToDeleteExperiment:
"The selected experiment cannot be deleted.",autocompleteTruncatedWarningLabelSingular:
"{0} result not shown",trialDialogNotNow:"Not now",storageOverCapacity:"You are over the limit",
ssimUploadSuccess:"Upload finished successfully",navbarMobileFeedback:"Feedback",
updateRequired:"Update required",publishExperimentToCommunityVisibilityLabel:"Visibility",
webServiceGroupDashboardParentExperimentLable:"Published experiment",microsoftAzure:
"Microsoft Azure",webServiceUpdateInProductionAction:"Update in Production",fxs_fxsDrawerProgress_warningShortMultiple:
"{0} have warnings",fxs_fxsCustomerSupport_supportPlanLoadFailure:"Failed to retrieve your support plan.",
deleteDatasetDependenciesWarning:"Deleting this dataset will remove it from the following experiments. Do you want to proceed?",
removeCredentialsConfirmation:"Remove {0} Credential(s)",createScoreTutorialTrainedModelContent:
"We created and saved this trained model from your original experiment so we don't have to retrain the model when the web service runs.",
guidedTourCanvasTitle:"Experiment Canvas",experimentEditorContextMenuSaveAsTrainedModel:
"Save as Trained Model",cannotPublishDirtyExperiment:"The experiment must be run so that your edits can be validated.",
datasetListDownloadCommand:"Download",saveAsTransform:"Save as Transform",multiclassConfusionMatrixHeader:
"Confusion Matrix",trialDialogShowMeHow:"Show me how",launchColumnSelector:"Launch column selector",
nullExperimentID:"Null experimentId",resourceFormat:"Format",azurePrivacyLabel:"Privacy & Cookies",
renameNotebookDialogDefaultNotebookNameBeginning:"Untitled",binaryClassificationNumberOfPositiveExamples:
"Positive Examples",validationValueIsNotAValidInteger:"The value is not a valid integer.",
ExperimentProperties:"Experiment Properties",clickOnceWarning:"This may not work with your browser. Use Internet Explorer if you encounter problems.",
twitterButtonTitle:"Tweet this",columnPickerWithRules:"with rules",experimentProcessorErrorNoOutputPortsOld:
"The old trained model doesn't have any output ports.",experimentProcessorErrorNoOutputPortsNew:
"The new trained model doesn't have any output ports.",navbarTimeRemaining:"Time remaining for trial workspace",
homeGetWorkspace:"Get my own workspace. {0} required.",apiCodeDialogWelcomeMessage:
"To programmatically access this dataset, simply copy the code snippet into your favorite development environment. ",
datasetListGenerateAccessCodeCommand:"Generate Data Access Code... ",welcomeInfo5MoreCaptionModuleCategoryList:
"Browse all topics...",dataGatewayEnterCredentials:"Enter values",multiclassMicroAveragedPrecision:
"Micro-averaged precision",errorBrowserUpgrade:"Please upgrade your browser or use one of the following supported browsers.",
dataGatewayInstallPreamble:"To use this data gateway you need to install Microsoft Data Management Gateway on a computer that has network connectivity to the data sources.",
zoomToFit:"Zoom to fit (0 key)",animatedExperimentStep3Title:"Select an ML algorithm",
DraftState_SaveFailed:"Draft save failed",fxshell_previewbadge_feedbackLinkText:
"What do you think? Give us your feedback.",multiclassAverageAccuracy:"Average accuracy",
deleteNotebookProgress:"Deleting notebook {0}. ",projectQuickCreateLabelDescription:
"Description",errorForumLink:"https://social.msdn.microsoft.com/forums/azure/en-US/home?forum=MachineLearning",
workspaceNotFoundGoToYourWorkspaceLink:"http://go.microsoft.com/fwlink/?linkid=402635&amp;clcid=0x409",
trialDialogParallelRunDisabledDescriptionForFree:"With a Free account, you cannot run two or more experiments simultaneously. To remove this restriction, please sign up for an {0}, and then create a new {1}.",
learnMore:"Learn More.",uploadModuleDialogExampleR:"Download example R module",experimentDetailedDescriptionPlaceholder:
"Enter the detailed description for your experiment.",HomePageCompetitionCallToAction:
"Learn More",startTime:"Start time",navbarHelpSearchNoResults:"No Results found.",
signOut:"Sign Out",dataGatewayRegistrationKeyPreample:"After installation, when prompted to register, use this key.",
unconnectedInputPort:"Input port {0} is unconnected.",animatedExperimentStep2Title:
"Split dataset",removeWebServiceParameterDefaultValue:"Remove default value",workspaceUnableToSaveYourChangesPleaseRefresh:
"{0} was unable to save your changes, as workspace settings have been changed by another session. Please refresh the page and try again.",
homeWelcomeOrSignIn:"Or, sign in with a Microsoft account",newDataGatewayNameLabel:
"Gateway Name",competitionSubmissionWizardStep2TitleValidationError:"Oops, we've found some errors.",
webServiceTypeTitle:"Type",trialDialogSignInNow:"Sign in now",ssimUpdatingCache:
"{0}, updating dataset cache...",recentWorkLastEditedLabel:"Last Edited",ColumnPickerColumnsThatAre:
"that are",animatedExperimentStep1Title:"Add a dataset from samples",HomePageCompetitionText:
"Competitions",navbarMobileFedbackHeader:"Submit Feedback",NotAuthorizedToInstrument:
"<not authorized>",animatedExperimentStep6Content:"You have successfully built a machine learning model to predict income level based on demographic information.<p><\/p><a href='http://go.microsoft.com/fwlink/?LinkId=524824' target='_blank'>•See more examples<\/a><p><\/p><\/div>",
UnhandledExceptionRefreshLink:"refresh your browser",experimentGridHeaderEndTime:
"End Time",moduleErrorChatPrompt:"Need more help? ",welcomeInfo2Link2CaptionGettingData:
"Getting data",publishExperimentToCommunityCustomModulesPresentWarningLabel:"This experiment contains one or more custom modules. They will be published along with the experiment.",
competitionSubmissionErrorNotificationDetailsFormat:"Competition entry submission failed with error: {0}",
navigatingAway:"Navigating away will cancel any existing uploads.",homeWelcomeDescription:
"It's free and easy to try Machine Learning right now—just sign in with a Microsoft account and start experimenting. No credit card or Azure subscription needed.",
webServiceGroupDashboardGeneralLabel:"General",animatedExperimentStep0Title:"Build an experiment in 5 short steps",
validationValueIsNotAValidFloatingPointNumber:"The value is not a valid floating point number.",
homeWelcomeSubtitleAnonymous:"Try it for free",noModulesSaveError:"Cannot save experiment draft with no modules.",
createWebServiceGraphNameLabel:"Name",pressEnterColumnName:"Press enter to enter column name",
publishExperimentToCommunityWizardImageSelectionTitle:"Image Selection",deleteWebServiceParameter:
"Delete parameter",inviteUsers:"Invite Users to Workspace",homeSignIn:"Sign In",
showHideMiniMap:"Show/Hide mini map (m key)",webServiceDeployToProductionAction:
"Deploy to Production",experimentEditorPropertiesPaneScriptEditorPopOut:"Popout the script editor",
goToWebService:"Go to web service",treeEnsembleExpand:"expand",commandsSave:"Save",
fxshell_navigation_backImgAlt:"Back",DraftState_SavedAt:"Draft saved at {0}",guidedTourDrawerContent:
"You can start with a blank experiment or use a sample.  We'll choose a blank experiment.",
rOutputStandardError:"Standard Error",trialDialogNoTimeLimits:"Did you know the paid version has no time limits? {0}",
animatedExperimentStep6Title:"Congratulations, you did it!",trialDialogSeeFeaturesUrl:
"//go.microsoft.com/fwlink/?LinkID=517831",homeExtensionDisplayName:"Studio Home",
fxs_fxsCustomerSupport_manageButton:"Manage Tickets",dataGatewayCredentialValuesSet:
"values set",fxs_fxsDrawerTray_progress_active:"Active Progress",moduleCategoryDescription:
"Create a custom module to use in {0} experiments",floatNotLess:"The value {0} is not a valid number less than {1}.",
competitionSubmissionErrorTimeout:"Operation timed out. Please try again.",workspaceNotFoundModelSignOut:
"Sign Out",fxs_fxsDialog_close:"Close",singleColumnSelectHeading:"Select a single column",
fxs_fxsProgressBox_backToOperations:"Back to progress operations",fxshell_previewbadge_termsLinkText:
"Read the terms of use for features that are in preview.",animatedExperimentStep5Title:
"Run the experiment",fx_fxCopyButton_label:"Copy to clipboard",visualizationNaN:
"NaN",PropertyEditorEditAndEllipsis:"Edit...",dataGatewayNameInvalid:"The data gateway name can only contain letters (A to Z), numbers, dashes and underscores. The name cannot contain spaces.",
rulesStartingChoiceLabel:"Begin With",experimentStateLockedHover:"Your experiment is locked. Click 'SAVE AS' at the bottom to create a new experiment draft.",
discardDraftAreYouSureQuestion:"You are about to discard the changes made since the last run. This cannot be undone. Are you sure?",
workspaceCreationTime:"Creation Time",fxs_fxsCustomerSupport_supportPlan:"Support Plan",
fxs_fxsCustomerSupport_supportType:"Support Type",newExperimentMenuOpenCallFailed:
'Call to open experiment "{0}" failed.',subscription:"Subscription",uploadModuleDialogEnterName:
"Module name",responseErrorNotification:"Failed to process a network response",deleteNotebookConfirmation:
"Delete notebook {0}? ",fxs_fxsCustomerSupport_supportPlanFree:"Free - billing support",
fxs_fxsCustomerSupport_supportPlanNone:"None",fxshell_navigation_error:"Error...",
allExperimentsPivotDisplayName:"My Experiments",workspaceNotFoundModelMLCenterLink:
"http://go.microsoft.com/fwlink/?LinkID=403343",experimentEditorContextMenuVisualize:
"Visualize",bubbleBackButtonText:"BACK",fxs_fxsProgressBox_backToSteps:"Back to progress steps",
animatedExperimentStep4Title:"Make predictions",accessPermissionInstructions:'Please specify the user\'s <a href="http://windows.microsoft.com/en-us/windows-live/sign-up-create-account-how" target="about:blank">work or school account, or a Microsoft Account<\/a> (e.g. Windows LiveID). The user will be notified via e-mail and will need to sign-in using that account.',
trialDialogDisabledModuleTitle:"We've hit a little snag",palletteSearchBoxPlaceholder:
"Search experiment items",moduleErrorHideDetails:"HIDE DETAILS",gatewayGetNewVersionHtml:
'<a href="http://go.microsoft.com/fwlink/?LinkId=271260">Download<\/a> and install the latest version of data gateway. (64 bit preferred)',
webServiceDownloadLegacyExcelLabel:"Download Excel Workbook (2010 and earlier)",
fxs_fxsCustomerSupport_purchasePlanMessageFormat:"Your current plan does not include technical support. Consider {0}.",
trialDialogExceededStorageLimitDescription:"With a Free workspace, you cannot use more than {0} GB of storage. To remove this restriction, please sign up for an {1}.",
uploadDatasetDialogDescription:"Provide an optional description:",apiCodeDialogTitlePreviewTag:
"(Preview)",competitionSubmissionWizardStep2TitleValidationSuccessful:"Validation succeeded!",
fileTooLargeAnonymous:"The selected file is too large. The maximum allowed size for a Guest workspace is {0}",
projectQuickCreateLabelCreateProject:"Create Project",publishNotebookSummaryPlaceholder:
"Enter a few lines summarizing the goal of the notebook",trialDialogReturnToTrial:
"Return to trial",confirmDeleteSelectedExperiment:"Are you sure you want to delete the selected experiment?",
MultiselectLabelManySelected:"{0} items selected",valueNotValidInteger:"The value is not a valid integer.",
productNameMedium:"Azure ML Studio",fx_fxGrid_loading:"Loading...",columnPickerColumnIndices:
"Column indices",fxshell_toastbox_open:"open",experimentEditorContextMenuHelp:"Help",
experimentEditorContextMenuCopy:"Copy",valueNotValidFloat:"The value is not a valid floating point number.",
scoreDialogNoDataNeeded:"This web service does not require any input",authTokens:
"Authorization Tokens",animatedExperimentStep3Content:"Let’s choose Two-class Boosted Decision Tree algorithm and train it with the training dataset.",
newExperimentMenuSearchPlaceholder:"Search experiment templates",competitionSubmissionErrorMessage2:
"to re-submit or try again later.",competitionSubmissionErrorMessage1:"Oops! We ran into an unexpected error. Please",
fxshell_previewbadge_onPremContentHeader:"Preview Site",fxs_fxsDrawerProgress_join:
"{0}, {1}",replaceExistingNode:"Replacing an existing node since it uses a resource which has been updated.",
PropertyPanelStartTime:"Start time",welcomeInfo4Link3CaptionHrefModels:"http://go.microsoft.com/fwlink/?LinkID=403642&clcid=0x409",
experimentGridHeaderStatus:"Status",regressionMetricCoefficientOfDetermination:"Coefficient of Determination",
notifications_buttons_scale:"Scale",competitionSubmissionErrorCompetitionEnded:"Competition is already closed.",
notifications_buttons_retry:"Retry",deletingTrainedModel:"Deleting trained model…",
resourceAuthor:"Author",fxs_fxsCustomerSupport_billing:"Billing",notifications_buttons_pause:
"Pause",webServiceDiagnosticsModeAll:"Yes",notifications_buttons_close:"Close",experimentGridHeaderSource:
"Source",publishExperimentToCommunityUnlistedPublishLabel:"Unlisted",myDatasets:
"My datasets",webServiceTestProgressTitle:"Testing '{0}'",VisualizationCategories:
"categories",experimentEditorWatermarkText:"To create your experiment, drag and drop<br>datasets and modules here",
uploadDatasetDialogEnterName:"Enter a name for the new dataset:",webServiceGroupDashboardWsTestButtonText:
"Test",guidedTourNewButtonContent:"The '+NEW' menu is the starting place for creating experiments and uploading datasets or custom modules.",
recentWorkSizeNormal:"Normal",experimentEditorContextMenuDownload:"Download",RefreshStatus_Failed:
"Refresh status failed.",saveAsDataset:"Save as Dataset",homeGuestAccess:"Guest Access",
experimentEditorContextMenuUnsetAsPublishInput:"Unset as Publish Input",statusCode:
"Status code",webServiceGroupDisplayName:"Web service",workspaceUserInviteInvitedText:
"Invited",publishNotebookVisibilityUnlistedExplanation:"Only people with the direct link can view and copy the notebook.",
welcomeInfo1Link3HrefRssUpdates:"http://go.microsoft.com/fwlink/?LinkID=403651&clcid=0x409",
uploadModuleDialogExampleRLink:"//go.microsoft.com/fwlink/?LinkId=524916",welcomeInfo1Link1HrefReleaseNotes:
"http://go.microsoft.com/fwlink/?LinkID=403536&clcid=0x409",fxs_fxsWizard_close:
"Close",experimentEditorContextMenuOutputLog:"Output Log",setToWebServiceParameter:
"Set to {0}",copyExperimentDialogDestinationWorkspace:"Destination Workspace",fxshell_feedback_yes:
"Yes",projectsPlusNewTitle:"Project",errorServiceUnavailable:"We're sorry. Azure Machine Learning is temporarily unavailable. Our engineers are working quickly to resolve the issue.",
copyExperimentDialogCopyExperimentFailed:'Copying experiment "{0}" to workspace "{1}" failed: {2}',
infoErrorHttpStatusCode:"Http status code: {0}",experimentStateInDraftHoverErrors:
"Your experiment has errors",fxshell_feedback_quickly:"Did the UI load quickly?",
trialDialogSeeFeatures:"See which features come in each version",allowDuplicatesInSelectionLabel:
"Allow duplicates and preserve column order in selection",publishExperimentToCommunitySummaryPlaceholder:
"Enter a few lines summarizing the goal of the experiment",fxs_fxsProgressBox_details:
"Details",navbarGuestTitle:"Guest",notebookPlusNewBlankExperiment:"Blank Notebook",
competitionSubmissionErrorWebServiceInputPortNotFound:"The staging web service does not have input port.",
workspacePageGB:"GB",menuPrivacyNotice:"//go.microsoft.com/fwlink/?LinkID=131004",
binaryClassificationScoredDataset:"Scored dataset",webServiceGroupTestsTabTitle:
"Tests",networkCategoryDescription:"Take advantage of a fully compatible, enterprise-ready Hadoop service. This PaaS offering provides easy management and integrates with Active Directory Domain Services and Microsoft System Center.",
welcomeUsingSampleExperiments:"Using Sample Experiments",multipleTrainModuleSelectionTourContent:
"Please click on the Train Model you want to use for Scoring.{0}",contextMenuNotebookPython2:
"Python 2",contextMenuNotebookPython3:"Python 3",projectQuickCreateLabelName:"Name",
guidedTourModulesPaneContent:"In this pane, you will find the modules used to build an experiment.",
welcomeInfo6Link4CaptionHrefMLCenter:"http://go.microsoft.com/fwlink/?LinkID=403343",
learnerSettingsValue:"Value",experimentGridHeaderStartTime:"Start Time",regressionMetricRelativeAbsoluteError:
"Relative Absolute Error",UnhandledExceptionPlaceholder:"Tell us what you were doing when you got this error.",
experimentListPivotTutorials:"tutorials",infoErrorTimestamp:"Timestamp: {0}",elapsedTime:
"Elapsed time",experimentSaveAsDialogEnterHere:"Enter experiment name here...",binaryClassificationNegativeRecall:
"Negative Recall",avatarBar_menuLabel:"Menu",apiCodeDialogTokenUnavailable:"You will need to get the workspace owner to reinvite you to this workspace as an Owner.",
guidedTourCanvasContent:"This is the body of your experiment. Add and connect modules to create a data science workflow.",
usePreviousResultsLabel:"Use cached results",experiments:"Experiments",quickHelpMore:
"(more help...)",MultiselectLabelNoneSelected:"Make a selection",workspaceNotFoundModelWorkspaceNotFound:
"Workspace Not Found",publishExperimentToCommunityVisibilityPrivate:"PRIVATE",fxs_fxsNotification_back:
"All notifications",viewModelDraftSaveFailed:"Draft save failed, retrying...",fx_fxTreeView_collapsed:
"Collapsed",welcomeTextSegment1Body:"Take a quick tour of the {0} features.",welcomeInfo3Link2CaptionHrefFeedback:
"http://go.microsoft.com/fwlink/?LinkID=403669&clcid=0x409",lastConnected:"Last connected",
trialDialogOops:"Oops, looks like you hit a limit…",welcomeTextSegment5Body:"Publish and stage your predictive model as an Azure-based service.",
welcomeTextSegment4Body:"Learn the steps required for building, scoring and evaluating a predictive model.",
welcomeTextSegment3Body:"Clean, transform, and normalize your data.",websitesCategoryDescription:
"Get started for free and scale-up as your traffic grows. Build with ASP.NET, PHP, or Node.js, and deploy in seconds with FTP, Git or TFS.",
welcomeTextSegment2Body:"Get, upload, and save data to your workspace.",fxs_fxsDrawerProgress_errorSingle:
"1 operation has failed",competitionSubmissionTerms:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.",
retreivingScoringExperimentStepTitle:"Retrieving predictive experiment",navbarDocumentationHome:
"Documentation Home",experimentStateQueued:"Queued",binaryClassificationRecall:"Recall",
UnhandledExceptionGiveFeedback:"Give feedback",landingPageCarouselSlide4Caption:
"Azure ML Competitions",rocRecall:"Recall",notifications_buttons_details:"Details",
newExperimentMenuEmptySearchResult:'Found no results for "{0}" ',fx_fxGrid_filter:
"Filter",workspacePageWorkspaceTypeFree:"Free",experimentListItemsSelectedMessage:
"{0} items selected",modelPackageConfigErrorName:"There was problem with saving your webservice's display name/description. Please try again later.",
experimentProcessorErrorNoCompatibleScorerFound:"Couldn't find a compatible score module.",
welcomeInfo1Title:"What's New",regressionError:"Error",recentWorkSizeBig:"Big",addNewDataGateway:
"(Add new data gateway...)",componentCount:"A resource ID should have three components separated by a period (workspace.family.instance). The given ID had {0} component(s).",
fxs_fxsCustomerSupport_region:"Country/Region",duplicateTransform:"Transform with id {0} already in experiment.",
copyExperimentFromGalleryGeoWorkspaces:"WORKSPACE:",homeWelcomeLearnMore:"Pricing & FAQ",
welcomeInfo6Link5CaptionHrefWAManagementPortal:"http://go.microsoft.com/fwlink/?LinkID=403644&clcid=0x409",
welcomeInfo3Link1CaptionHrefFeedback:"http://go.microsoft.com/fwlink/?LinkID=403535&clcid=0x409",
uploadModuleDialogExamplePy:"Download example Python module",publishExperimentToCommunityWizardTitle:
"Publish to Gallery",experimentEditorContextMenuCut:"Cut",trialDialogExceededModuleCountLimitDescriptionForFree:
"With a Free workspace, you cannot run an experiment with more than {0} modules. To remove this restriction, please sign up for an {1}, and then create a new {2}.",
fxs_fxsDrawerProgress_successShortSingle:"1 has completed",multipleTrainModuleSelectionTourTitle:
"Please select a train model",trialDialogSignIn:"Sign in",webServiceApiHelpLabel:
"API help page",notifications_buttons_complete:"Complete",fxshell_avatarbar_privacyLabel:
"Privacy & Cookies",competitionSubmissionErrorWebServiceOutputPortNotFound:"The staging web service does not have output port.",
scoreDialogTitle:"Test {0} Service",uploadTrainedModelDialogExistingTrainedModel:
"Existing trained model:",webServiceMarkAsReadyForProductionAction:"Mark as Ready for Production",
webServiceProductionStatusTitle:"Production status",fxs_fxsDrawerHelp_close:"Close",
welcomeScoringAndVisualizing:"Scoring and visualizing results",fx_fxGrid_collapsed:
"Collapsed",webServiceTestResultStepTitle:"Result: {0}",guidedExperimentSplitContent:
"Split the dataset into two parts: a training set for training the learning algorithm, and a test set for predicting income level.",
apiCodeDialogLongCodeLabel:"Code Snippet",frequency:"frequency",fxs_fxsSupportGrid_loading:
"Loading",fxs_fxsSubscriptionPicker_subscriptionFilter:"Subscriptions",autoUpgradeModulesAndDatasets:
"This experiment contains modules and/or datasets which have newer versions. Please wait while your experiment is upgraded.",
fxs_fxsDrawerHelp_title:"Help",CarouselPrevious:"Previous",fxs_fxsCustomerSupport_iconAlternate:
"Contact Microsoft support",visualizationStatisticUniqueValues:"Unique Values",clickToPan:
"Click to enable pan mode. Center click and drag, or, space and drag, to pan at any time.",
computingExperimentTabContent:"Computing experiment",autocompleteTruncatedWarningLabelPlural:
"{0} results not shown",rocPrecision:"Precision",welcomeInfo2Title:"Documentation",
choiceParameterPleaseSelectValue:"Please select a value",fx_fxGrid_descending:"Descending",
animatedExperimentStep0Content:"Let’s build a machine learning experiment to predict income level based on demographic information.",
toggleToWebServiceViewTooltip:"Click to switch to web service view",recentWorkThumbnailSize:
"Size",competitionSubmissionRetryMessage:"click here",PropertyPanelEndTime:"End time",
webServiceDeployedToProduction:"Deployed to Production",welcomeInfo5Title:"Module Reference",
competitionStatusCreateWebService:"Web Service Deployed",DraftState_Saving:"Saving...",
recentWorkPreview:"Preview",trainedModelsNoRows:"No trained models found",competitionSubmissionWizardStep3TitleSubmissionFailed:
"Unexpected error",fxshell_navigation_warning:"Warning...",fxs_fxsCustomerSupport_title:
"Contact Microsoft Support",outputSavedAs:"Output saved as '{0}'.",webServiceEndpointsSectionTitle:
"Additional endpoints",fxshell_previewbadge_contentPara:"Welcome to the Windows Azure Management Portal.",
SaveOutputAsANewDataset:"Save output as a new dataset",setPublish:"Set as Publish Input",
columnPickerColumnsSelectedShowing:"{0} columns selected (showing {1})",publishExperimentToCommunityTwitterButtonTitle:
"Share your experiment with your Twitter followers",fxshell_previewbadge_onPremContentPara:
"Welcome to the Management Portal Preview. You may encounter certain limitations and restrictions in this preview portal.",
validationValueIsNotAValidNumberLessThan:"The value {0} is not a valid number less than {1}.",
uploadModuleFromZip:"From zip package",welcomeInfo3Link1CaptionFeedback:"Provide feedback",
azureUserStorageError:"Azure User Storage Error.",fxs_fxsDrawerTaskbar_help:"Help",
contextMenuNotebookR:"R",renameNotebookDialogNameTitle:"Name Notebook",columnPickerTooLargeDatasetError:
"Selecting columns by name is disabled for datasets with more than {0} columns",
fxs_fxsCustomerSupport_errorRetrievingPlan:"We were unable to retrieve your support level. Create tickets using a temporary level of: {0}.",
experimentProcessorErrorOutputNotConnected:"The output of the old trained model is not connected.",
fxs_fxsSubscriptionPicker_apply:"Apply",trialDialogDisabledPublishToCommunityDescription:
"Looks like you are trying to publish an experiment to Gallery. This feature is only available in the Free or Standard tier of Azure Machine Learning. To enable it, please sign in with a {0}",
workspaceNotFoundModelSignOutLink:"/authentication/signout",priorRun:"Prior Run",
apiCodeDialogTokenWarning:"Note: this code includes your workspace access token, which provides full access to your workspace. It should be treated like a password.",
moduleErrorTitle:" Error",publishExperimentToCommunityWizardPublishPageTitle:"Publish",
experimentEditorContextMenuDelete:"Delete",welcomeInfo3Link2CaptionFeedback:"Ask a Question (forum)",
feedbackInputPlaceholder:"Please provide any feedback you may have.",fxs_fxsSupportGrid_idColumn:
"Request ID",productNameLong:"Microsoft Azure Machine Learning Studio",workspaceDisabled:
"Your workspace {0} is disabled.  Please contact your Azure subscription administrator.",
experimentGridHeaderCreator:"Author",modelPackageConfigInputSchema:"Input Schema",
confirmDeleteDataGateway:'Are you sure to delete the data gateway "{0}"? Any modules that reference this gateway will fail when executed after it is removed.',
notebookPublishCompletedEmailText:"Check out my machine learning notebook on {0}",
trialDialogNoSizeLimits:"Did you know the paid version has no size limits? {0}",
competitionSubmissionWizardTermAcceptanceStepAcceptTermsCheckboxLabel:"I agree to the above Terms and Conditions.",
welcomeInfo3Title:"Contribute",welcomePublishModel:"Publishing the prediction service",
liftPlotYAxis:"Number of True Positives",rocAccuracy:"Accuracy",liftPlotXAxis:"Positive Rate",
multiclassActualClass:"Actual Class",regressionMetricRootMeanSquaredError:"Root Mean Squared Error",
fxs_fxsCustomerSupport_subscription:"Subscription",usePreviousResultsLabelTooltip:
"Module only executes if valid cache does not exist, otherwise use cached data from prior execution.",
createScoreTutorialNewExperimentTitle:"New Experiment",welcomeInfo6Title:"Additional Resources",
multiclassMetricsHeader:"Metrics",fxs_fxsCustomerSupport_viewIncidentsTitle:"View Existing Tickets",
visualizationStatisticMean:"Mean",fxshell_feedback_satisfied:"How satisfied are you with the speed of deployments? [1-5]",
experimentStateFailedHover:"The experiment run failed",fxs_fxsDrawerTray_information:
"Information",webServiceManageEndpointsLink:"Manage endpoints in Azure management portal",
dataGatewayRegenerateRegistrationKey:"Regenerate registration key",recentWorkLastPublishedHeaderName:
"Name",charactersLeft:"character(s) left",dataGatewayDownloadAndRegisterTitle:"Download and register data gateway",
requestErrorNotification:"Error when requesting {0}",newExperimentMenuViewInGallery:
"View in Gallery",onlineSearchMenuDescription:"Search for public datasets",modelCannotQueueSave:
"Cannot queue save, since a discard operation is underway.",welcomeInfoGuideForCloudDataScienceProcess:
"Cloud Data Science Process",welcomeInfo4Title:"Samples",cannotRefresh:"Cannot refresh, store has not been initialized",
created:"Created",creator:"Creator",fxs_fxsDrawerProgress_collapse:"Collapse",avatarBar_feedbackLabel:
"Feedback",dataGatewayPreamble:"A data gateway provides access to on-premise data sources in your corporate environment.",
welcomeInfo4Link2CaptionDatasets:"Read about sample datasets",introTitle:"Welcome!",
trialDialogExceededStorageLimitTitle:"We've hit a little snag",quickHelpTitle:"Quick Help",
modelPackageConfigSave:"Save",goToCompetitionText:"View Competition in Gallery",
duplicateDataset:"Dataset with id {0} already in experiment.",uploadTrainedModelDialogDescription:
"Provide an optional description:",deleteNotebookSucceeded:"Notebook {0} has been deleted. ",
competitionSubmissionErrorWrongSchema:"Web service schema doesn't match expected schema.",
publishWebServiceCommandTitle:"Deploy Web Service",fx_fxTreeView_expanded:"Expanded",
modelPackageConfigErrorSchema:"There was problem with saving your webservice's schema. Please try again later.",
newExperimentMenuSearchResultLabel:'Search results for "{0}"',trialDialogLearnMoreUrl:
"//go.microsoft.com/fwlink/?LinkID=517831",welcomeCreatingAnExperiment:"Creating an experiment",
enterAddresses:"Enter a work or school account, or a  Microsoft Account (e.g. someone@example.com):",
webServiceGroupDashboardWsLastUpdatedHeader:"LAST UPDATED",resourceCreatedOn:"Created on",
fx_fxBalloonIcon_title:"Balloon Header",guidedTourChatWindowContent:"Get immediate help from our Support and Data Science team members.",
copyExperimentDialogCopyExperimentWarning:"Note: Uploaded datasets and other resources associated with the experiment will also be copied. Any passwords or secrets configured in the experiment will not be copied.",
binaryClassificationCumulativeAuc:"Cumulative AUC",modelPackageConfigReadyForProdYes:
"Yes",welcomePageTitle:"welcome to machine learning studio preview",columnPickerByNameDisabledError:
"Name-based column selection will be enabled after running the experiment.",endTime:
"End time",publishNotebookDescriptionPlaceholder:"Enter a detailed description of your notebook",
VisualizationViewAs:"view as",guidedExperimentRunContent:"We can now run the experiment to train the model and make a prediction on the test dataset.",
notebookPublishCompletedDescription:"Visit the Gallery to view comments, edit details, and share your notebook.",
HelpWhatIsDatalab:"e76c990c-bb44-4dea-b834-39d4c4e864ec",promotionSavingIntermediateOutput:
"Saving intermediate output.",scoreDialogEnterWebServiceParameters:"Enter Web Service Parameters",
fxs_fxsProgressBox_actions:"Actions",columnPickerColumnsAlreadySelectedError:'Columns have already been selected "by rule". Delete everything but "Include column names" rules to enable the "by name" column selector.',
fx_fxDialog_close:"Close",cannotPublishInvalidPublishPorts:"The ports selected for input and output are not valid.",
drawerTitle:"Properties",createScoreGraphCommandTitle:"Predictive Web Service [Recommended]",
avatarBar_signOutLabel:"Sign Out",moduleErrorRecordEndLabel:"Record end time:",fxs_fxsDrawerProgress_warningShortSingle:
"1 has a warning",ownerActions:"An owner can add, remove and list users with access to the workspace, in addition to what a user can do.",
webServiceGroupDashboardWsTestMultiInputWarning:"Test dialog is not supported for multiple input web services",
learnerSettings:"Settings",DraftState_SaveFailedRetrying:"Draft save failed, retrying...",
unsavedChangesWarning:"You have unsaved changes in this experiment, which will be lost if you leave this page.",
experimentEditorContextMenuUnsetAsPublishOutput:"Unset as Publish Output",experimentEditorContextMenuErrorLog:
"Error Log",columnPickerInputMustBeAListOfPositiveIndicesOrRanges:"Input must be a list of positive indices or ranges",
competitionSubmissionWizardStep3VisitGalleryLink:"View Competition in Gallery",loadMetadataFromGallery:
"Load metadata from Gallery",errorBrowserContinue:"Continue anyway,",Error_BrowserUnsupported_Summary:
"This web site requires some features that are only present in newer browsers such as Internet Explorer 10 or later.",
copyExperimentFromGalleryDialogWorkspaceInfoNotAvailable:"No workspaces found. Select another region.",
createdScoreExperimentStepTitle:"Created predictive experiment",navbarFeedbackSmileText:
"Send a smile",imageUploadError_GenericLoading:"Error loading image",notebookNameWhitespaceError:
"Notebook name must contain at least one non-whitespace character",feedbackWhatDidYouLike:
"What did you like?",learnerFeatureWeightsName:"Feature",copyExperimentDialogCopyExperimentStarted:
'Copying experiment "{0}" to workspace "{1}"',moduleErrorNoErrorMessage:"No error message",
updateTrainedModelInScoringExperimentStepTitle:"Updating trained model in predictive experiment",
removeUser:"Remove user {0}?",validationDuplicateWebServicePortNameFailed:"Web service port name {0} has already been defined.",
machineLearning:"Machine Learning",errorBrowserTitle:"Browser Not Supported",fxshell_avatarbar_getSupportLabel:
"Get support",validationValueIsLessThanMinimumOf:"The value {0} is less than minimum of {1}.",
launchSelectionToolToMakeSelection:"Launch the selector tool to make a selection",
ProjectDisplayName:"Project",competitionSubmissionErrorMissingColumns:"Missing Columns:",
infoErrorCode:"Error code: {0}",webServiceGroupViewCommandTitle:"Dashboard",errorId:
"Error {0}",microsoftAccount:"Microsoft account",appServicesCategoryDescription:
"Create highly-available, scalable applications and services using a rich Platform as a Service (PaaS) environment. Supports multi-tier scenarios, automated deployments, and elastic scale.",
homeGetStarted:"Get started",nodeCannotReplaceOutsideExperiment:"Can't replace a graph node that is outside of an experiment.",
createdOn:"Created on",uploadingNewCustomModulePackage:"Uploading module zip package '{0}'...",
Impl_UI_Notifications_DataLoad_viewDataLoadWarnings:"Warnings encountered loading management data for the current view.",
parameterRangeCountMustBeInteger:"Number of points must be a positive integer",deleteDataImports:
"Delete Data Imports",commandsPublishExperimentToCommunity:"Publish to Gallery",
guidedTourPropertiesPaneTitle:"Properties pane",publishWebServiceDialogHelpText:
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute.",
columnPickerHighlightMeansError:"Column names highlighted in red are either already selected or are not found in the data.",
parameterRangeErrorMustBeGreaterThan:"Values must be greater than {0}",homePageMyRecentWorkspaces:
"MY RECENT WORKSPACES:",upgradeModulesOrDatasets:"This experiment contains modules or datasets which have newer versions available. Would you like to upgrade them?",
welcomeInfo1Link3CaptionRssUpdates:"Updates by RSS feed",uploadDatasetDialogNewVersionOfDataset:
"This is the new version of an existing dataset",fxs_fxsDrawerTray_progress_error:
"Error Progress",webServiceTestSuccessTitle:"'{0}' test finished successfully",fxs_fxsSupportGrid_title:
"Support requests",copyExperimentFromGalleryConfirmationTitle:"Copy experiment from Gallery",
homePageMyRecentExperiments:"MY RECENT EXPERIMENTS:",VisualizationScales:"scales",
notifications_buttons_escalate:"Escalate",welcomeSkipMessage:"Do not show this page again at start up",
parameterRangeErrorMustBeLessThan:"Values must be less than {0}",landingPageHeroCaption:
"Featured",welcomeGoText:"Go!",id:"Id",or:"or",ssimPendingDataset:"Pending dataset upload",
fxs_fxsNotification_error:"Error",VisualizationCompareTo:"compare to",modelCannotQueueDiscard:
"Cannot queue discard, since a discard operation is underway.",webServiceGroupCreationTimeLabel:
"Created on",dataGatewayRegisteredPostamble:"The data gateway has been registered and is now ready to use.",
offline:"Offline",bubbleNextButtonTextNew:"Show Me",confirmDeleteDataset:"Are you sure you want to permanently delete this dataset?",
prPlotXAxis:"Recall",uploadModuleDialogExistingModule:"Existing module",prPlotYAxis:
"Precision",disclaimer:'Use of Microsoft Azure services without a subscription is subject to the <a href="{0}">{1}<\/a>. By using these services, you agree to be bound by these terms.',
webServiceTestFailureTitle:"Unable to finish '{0}' test. {1}",experimentStateFailed:
"Failed on",trainedModels:"Trained models",parameterRangeInputMustBeDoubles:"Input must be a list of doubles",
homeWelcomeLearnMoreLink:"//go.microsoft.com/fwlink/?LinkID=517831",workspaceSelectorRegionSelectorLabel:
"REGION:",publishExperimentToCommunityConsentLabel:"Once published, everyone can view and copy this experiment from the gallery.",
publishExperimentToCommunityWizardSettingsTitle:"Settings",publishNotebookToGalleryConsent:
"I have replaced, in my notebook, my workspace_id value with '{{WorkspaceId}}' and my authorization_token value with '{{AuthorizationToken}}'. I understand that not doing so compromises my workspace. I have also removed all other confidential information from the notebook and all references to datasets not provided by Microsoft as samples.\r\n  ",
experimentNameError:"Experiment name must contain at least one non-whitespace character",
webServiceOlderVersionInProduction:"Older version in Production",experimentGridHeaderModificationTime:
"Last edited",publishWebServiceCommandTourTitle:"PUBLISH WEB SERVICE",animatedExperimentDontShowAgain:
"Don't show me this again",webServiceTestCommandTitle:"Test Service",newDataGateway:
"New Data Gateway",webServiceDiagnosticsMode:"Enable Logging",fxs_fxsSubscriptionPicker_usefulActions:
"Useful actions:",notebookPublishCompletedHeader:"Your notebook has been published",
welcomeBack:"Welcome back {0}!",workspaceBarWorkspaces:"Workspaces",fx_fxBalloonIcon_content:
"This is a balloon.",copyExperiment_LargeDataset_Title:"Copy to workspace failed because the total size of the dataset exceeds the max limit of {0}. Please reduce the dataset size and try again.",
scriptEditorHasChangesConfirmation:"You have made changes to the script, press OK to continue and discard the changes.",
publishLoadImageFromGallery:"Load image from Gallery",Shell_Net_versionMismatchError:
"A newer version of the site is available. Click OK to load it. You may need to reopen your browser if you still see this error.",
experimentSummaryPlaceholder:"Enter a few sentences describing your experiment (up to 140 characters).",
loadClientBeforeExtension:"DataLab client must be loaded before the DataLab extension",
uploadModuleDialogLearnMore:"Learn more.",publishExperimentToCommunityValidationError_CustomModule_Message:
"Publishing experiment with custom modules to Gallery is not supported.",duplicateType:
"Duplicate DataType ID: {0}",duplicateName:"An experiment parameter with the given name already exists",
fxs_fxsDrawerProgress_activeSingle:"1 operation is currently running",learnerFeatureWeightsValue:
"Weight",errorDialogActivityID:"Activity Id: ",miniMapTitle:"Mini Map",fxs_fxsCustomerSupport_msdnLinkText:
"MSDN technical support",guidedExperimentName:"Experiment Tutorial",trainedModelDeleted:
"Trained model deleted",welcomeInfo6Link5CaptionWAManagementPortal:"Azure Management Portal",
parameterIsLinkedToWebServiceParameter:'Parameter is linked to "{0}"',recentWorkPivotDisplayName:
"Recent Work",notebookPlusNewExamplePython2Notebook:"Welcome to Studio/Jupyter",
fxs_fxsCopyButton_alt:"Copy to clipboard",fromLocalFile:"From Local File",fxshell_avatarbar_expansionArrowAlt:
"Expand",valueRequired:"Value required.",webServiceGroupDashboardWsBatchType:"BATCH EXECUTION",
webinarAiredOn:"Aired on",webServiceGroupDashboardWsRRSType:"REQUEST/RESPONSE",treeEnsembleSplitGain:
"split gain",email:"Email",columnPickerColumnNames:"Column names",login:"Login",
close:"Close",webServiceProductionEnvironmentTitle:"Production environment",VisualizationRows:
"rows",other:"Other",owner:"Owner",columnPickerColumnTypes:"Column types",newDatasetMenuHeader:
"Upload a new dataset from a local file",users:"Users",publishWebServiceWithTransformWarning:
"Click on the appropriate transform nodes output port menu to begin web service creation.",
notebookPlusNewExampleDescription:"Start here for an intro to Jupyter notebooks",
paste:"Paste",createScoreTutorialInputOutputNodesContent:"You now have the ability to add, change or remove inputs and outputs in your experiment",
cut:"Cut",datasetDeleted:"Dataset deleted",welcomeTextSegment1Title:"Getting Started",
columnPickerInputNameList:"Input a single column name.",state:"State",share:"Share",
competitionSubmissionWizardStep1SubmissionNameLabel:"Submission Name",competitionSubmissionErrorInvalidInputHeader:
"Invalid input columns:",ChooseADatasetTypeAndEllipsis:"Select a dataset type...",
publishExperimentToCommunityCredentialsAbsentWarningLabel:"To ensure Gallery visitors can copy and run this experiment, you might want to provide instructions on how to access the credential-protected resources used in this experiment in the DETAILED DESCRIPTION field above.",
fxs_fxsDrawerProgress_warningSingle:"1 operation has a warning",welcomeInfo6Link1CaptionHrefForum:
"http://go.microsoft.com/fwlink/?LinkID=403669&clcid=0x409",renameNotebookDialogRenameTitle:
"Rename Notebook",notebookLanguageR:"R",notifications_buttons_save:"Save",notifications_buttons_stop:
"Stop",notifications_buttons_next:"Next",notifications_buttons_copy:"Copy",notifications_buttons_back:
"Back",welcomeTextSegmentMore:"(read more...)",welcomeInfo6Link3CaptionHrefMLSupportSite:
"http://go.microsoft.com/fwlink/?LinkID=403722&clcid=0x409",guidedExperimentTransformationsTitle:
"pre-processing",SelectAColumnAndEllipsis:"Select a column...",modelPackageConfigDisplayName:
"Display Name",experimentStateLocked:"Locked",competitionSubmissionWizardStep2WarningOnlyPreamble:
"We found some warnings. You may submit your entry without fixing them.",publishWebServiceOverwritingConfirmationDetails:
"This operation cannot be reversed.",Shell_Net_loggedOut:"Your session has timed out. Click OK to log in again.",
publishFailed:"Publish as a Dataflow failed:  {0} error",avatarBar_legalLabel:"Legal",
publishExperimentToCommunityWizardImageSelectionStockImagesTab:"Select stock image",
removeUsers:"Remove {0} users?",enableClipboard:"Universal Connect was refused, cannot copy to clipboard. Go to about:config and set signed.applets.codebase_principal_support to true to enable clipboard support.",
publishExperimentToCommunityWizardImageSelectionCustomImageTab:"Upload an image",
clusterPrincipalComponent:"Principal Component",fxs_fxsDrawerTray_progress_completed:
"Completed Progress",HomePageWebinarCalendarCallToAction:"Upcoming Webinars",customModuleZipPackageFailed:
"Failed to register modules in zip package {0}",modelPackageConfigReadyForProd:"Ready for production?",
confirmCreateScoringGraphTitle:"Create new predictive experiment",deleteTrainedModelDependenciesWarning:
"Deleting this trained model will remove it from the following experiments. Do you want to proceed?",
moduleErrorRecordStartLabel:"Record start time:",publishExperimentToCommunityWizardImageSelectionSubTitle:
"Use a JPG, GIF, or PNG.  A resolution of 960 by 640 pixels works best.",uploadModuleDialogExamplePyLink:
"//go.microsoft.com/fwlink/?LinkId=624437",publishWebServiceErrorWithTooManyColumns:
"Reduce the total number of input and output columns to less than 1000 and try publishing again.",
competitionSubmissionErrorNotificationTitle:"Competition entry submission failed.",
welcomeTextSegment5Title:"Publish a Predictive Model",parseResourceIdAndValidate:
"The given resource ID disagrees with its expected family ID.",deleteDatasetBlockedByDependencies:
"This dataset cannot be deleted because there are web services depending on it.",
renameNotebookDialogNameInputLabel:"Notebook Name",commandsRun:"Run",EditProfileLinkText:
"My Profile",imageUploadError_FileTooLarge:"Image must be less than {0} megabytes in size.  Please try a smaller image.",
notebookNameIllegalCharacterError:"A notebook name can't contain any of following characters: {0}",
welcomeTextSegment4Title:"Predictive Modeling",animatedExperimentStep2Content:"Let’s randomly split the dataset into training set (70%) and test set (30%).",
liftPlotName:"lift",learnerFeatureWeights:"Feature Weights",fxshell_logviewer_copyLogToClipboard:
"Copy Log To Clipboard",updateAvailable:"Update available",trialDialogDisabledModuleDescriptionNamed:
"Looks like you are trying to use the module {0} which is only available in the Free or Standard tier of Azure Machine Learning. To enable it, please sign in with a {1}.",
rangeBuilderLogarithmicScaleCheckbox:"Log Scale",publishExperimentToCommunityPublishedExperimentVisitGalleryLabel:
"Visit the Gallery to view comments, edit details, and share your experiment.",homeWelcomeAgreement:
'By using this free version, you agree to be bound by the <a href="{0}" target="_blank">{1}<\/a>.',
feedbackHoverText:"Give feedback",refreshStatus:"Refresh status",creatingScoreExperimentStepTitle:
"Creating predictive experiment",UnhandledExceptionStatement:"We've collected the error info and are working on getting this fixed.",
confirmDeleteSelectedExperiments:"Are you sure you want to delete the {0} selected experiments?",
uploadTrainedModelDialogEnterName:"Enter a name for the new trained model:",publishExperimentToCommunityPublicPublishLabel:
"Public",fxshell_dialogalertbox_expand:"expand",publishWebServiceUnsupportedModule:
"Publishing is not supported for experiments containing the {0} module. Please remove this module from your experiment and publish again.",
experimentContainsMissingResources:"Some datasets and/or trained models cannot be found. They may have been deleted. Please examine your experiment.",
errorDialogFeedbackWantToGiveFeedback:"Want to give us some feedback?",createScoreTutorialTrainedModelTitle:
"TRAINED MODEL",fxs_fxsDrawerProgress_dismiss:"Dismiss completed",welcomeTextSegment3Title:
"Preprocessing Data",nameTooShort:"The name is too short.",feedbackSendASmile:"Send a smile",
pressEnterTag:"Press the enter key to create a tag",validationValueIsNotAValidNumberGreaterThan:
"The value {0} is not a valid number greater than {1}.",modelCannotSaveDraftAlreadyUpdated:
"Your changes cannot be saved because this experiment draft has been updated in another session. Please re-open to see the latest version.",
welcomeInfo6Link3CaptionMLSupportSite:"Azure Support",workspaceWithCurrentLabel:
"{0} (Current)",experimentEditorContextMenuCreateWebService:"Create Web Service",
newExperimentMenuViewMoreInGalleryWithCount:"VIEW MORE IN GALLERY ({0})",parameterRangeInputMustBeIntegersOrRanges:
"Input must be a list of integers or ranges of integers",rocFalseNegative:"False Negative",
welcomeTextSegment2Title:"Getting and Saving Data",guidedExperimentExperimentDescriptionTitle:
"tutorial",feedbackSendAFrown:"Send a frown",fxs_fxsDrawerProgress_warningMultiple:
"{0} operations have warnings",webServiceGroupDashboardWsAppsHeader:"APPS",whatDidYouLike:
"What did you like?",fxs_fxsDrawerProgress_errorShortSingle:"1 has failed",notifications_buttons_ok:
"OK",notifications_buttons_no:"No",fxshell_logviewer_verbose:"Verbose",fx_fxValidation_pending:
"Pending",duplicateTrainedModel:"TrainedModel with id {0} already in experiment.",
fxs_fxsSubscriptionPicker_noResults:"No matching subscriptions were found.",helpSearchDidYouMean:
"Did you mean... ",selectUploadFile:"Select a file to upload",webServiceTestEnabledYes:
"Yes",webServiceGroupDashboardWsTypeHeader:"TYPE",HomeCreateANewExperiment:"Create a new experiment",
competitionSubmissionErrorWebServiceNotFound:"The staging web service cannot be found.",
runResultNotebookNamePrefix:"Run result ",uploadingNewDataset:"Uploading a new dataset '{0}' ...",
newExperimentMenuMicrosoftSamplesHeader:"Microsoft Samples",competitionSubmissionErrorMistypedColumns:
"Column '{0}' shoud have type {1}, not {2}.",workspaceUserInviteActiveText:"Active",
createScoringExperimentProgressTitle:"Creating predictive experiment",updateScoreGraphCommandTitle:
"Update Predictive Experiment",setupWebServiceCommandTitle:"Set up web service",
fxs_fxsDrawerProgress_successSingle:"1 operation has completed",outputLog:"Output log",
ChooseTransformToDeprecateAndEllipsis:"Select transform to deprecate...",guidedTourPropertiesPaneContent:
"You'll find information in this pane about your experiment and the modules in it, and get helpful tips.",
bubbleFinishedButtonTextNew:"Finished",HomeLoading:"Loading ",fxshell_feedback_poor:
"Poor",CompetitionProperties:"Competition",animatedExperimentAlternateStep0Title:
"Would you like a tour of Azure ML?",fileInvalidType:"Invalid file type.",trainingExperimentTabContent:
"Training experiment",homeWelcomeMyExperiments:"my experiments",foundTrainModuleStepTitle:
"Found train module in the training experiment",experimentSaveAsDialogHeader:"Create a copy of this experiment",
unknownPortDescriptor:"Unknown port descriptor type.",Error_BrowserUnsupported_Message:
"Your browser is not supported",introDescription:"Here is an overview video to get you started.",
competitionSubmissionWizardTermAcceptanceStepTitle:"Terms and Conditions",columnPickerColumnsAvailable:
"{0} columns available",rocPlotXAxis:"False Positive Rate",fxs_fxsSubscriptionPicker_filter:
"Filter by subscriptions:",featureType:"Feature Type",newExperimentMenuCannotOpen:
'Cannot open experiment "{0}"',fxshell_dialogalertbox_collapse:"collapse",ErrorNamedExperimentNotFound:
'Experiment "{0}" not found.',webServiceViewProductionWebServiceAction:"View Production Web Service",
webServiceGroupDashboardWsDownloadExcelType:"DOWNLOAD EXCEL",rocPlotYAxis:"True Positive Rate",
notebookErrorNameConflict:"A notebook with the same name already exists.",navbarHelpSearchResultsLabel:
"Search results for: ",datasetCategoryUserCreated:"My Datasets",clusterLabel:"Cluster",
workspaceNotFoundModelContactMicrosoftSupport:"Contact Microsoft Support",commandsPublishAsDataflow:
"Publish as Dataflow",publishNotebookDescriptionTitle:"Notebook Description",connectorCannotConnectPorts:
"Cannot connect {0} to {1}.",workspaceSubscriptionId:"Subscription ID",uploadDatasetFromLocalFile:
"From Local File",newExperimentMenuTemplateCopyName:"Copy of - {0}",welcomeInfo1Link2HrefUpdates:
"http://go.microsoft.com/fwlink/?LinkID=403650&clcid=0x40",webServiceTestEnabledNo:
"No",publishNotebookNameInputLabel:"Notebook Name",statusDetails:"Status details",
authenticateNotebookSessionFailed:"Could not authenticate the Notebook session. {0}",
webServiceDownloadExcelSampleDataConfirmationContent:"By downloading this Excel workbook, data sampled from your training data set will be available to those who call your web service with an API key.  Click “Use sample data” in the Excel workbook to see the data available.  To turn this off, go to the Configuration section of the web service dashboard and click “No” for “Provide sample data.”  To provide consent for sample data and continue with the Excel workbook download, click the checkmark button.",
serviceDown:"The service is down.",animatedExperimentStep5Content:"Now we are ready to run the experiment to get our predictions. This can take a minute or two.",
expectedModuleView:"Expected a ModuleView to handle command",competitionSubmissionWizardStep2Warnings:
"Warnings",fxs_fxsDrawerTray_error:"Error",publishExperimentToCommunityPauseOnPublishingMessage:
"Publishing to Gallery...",updateScoringExperimentProgressTitle:"Updating predictive experiment",
fxs_fxsDrawerProgress_errorShortMultiple:"{0} have failed",download:"Download",workspacePageWorkspaceType:
"Workspace Type",workspacePageWorkspaceName:"Workspace Name",workspaceId:"Workspace ID",
competitionSubmissionErrorExtraColumns:"Extra Columns:",workspaceStorageAccount:
"Storage account",experimentStateInDraft:"In draft",errorBrowserDisclaimer:"I understand that some features may not work properly.",
projectQuickCreateDescriptionPlaceHolder:"Enter the project description here…",nonEmptyExtension:
"The given file extension must be non-empty (after removing a leading dot, if present).",
workspacePageGigabytes:"gigabytes",homeWelcomeEnter:"Start Experiment",moduleErrorForumPrompt:
"If this problem persists, ",guidedTourMainNavTitle:"Azure ML main navigation",trialTimerTimeRemaining:
"time remaining",modelPackageConfigDescription:"Description",azureSubscription:"Azure subscription",
copyExperimentFromGalleryGeoLoading:"Loading",galleryNotebookOptions:"Notebook Options",
welcomeInfo2MoreCaption:"See all",helpStudioHelpName:"{0} Help",VisualizationToCreateAGraphSelectAFeatureInTheDataTableBelow:
"To create a graph, select a column in the table",drawerMainMenuData:"Data",ErrorExperimentNotFound:
'Experiment with ID "{0}" not found.',guidedTourMainNavContent:"These icons give you access to your experiments, web services, and account settings.",
experimentEditorContextMenuApiCode:"Generate Data Access Code…",cantDeleteExperimentPartOfAWebService:
'Experiment "{0}" cannot be deleted because a web service depends on it.',dataGateways:
"Data Gateways",publishExperimentToCommunityDescriptionPlaceholder:"Enter a detailed description of your experiment",
dataGatewayRegeneateWarning:"Regenerating the key will make this registered data gateway <strong>non-functional<\/strong> immediately until the data gateway is newly registered with the regenerated key.",
workspaceBarUsefulActions:"Useful actions:",errorLog:"Error log",modelCannotSaveExp:
"Cannot save a submitted experiment.",notRegistered:"Not registered",viewModelDataTooLarge:
"The data you are trying to view is too large (more than 20MB) to view in the web browser. To download it, right-click the view link in the properties panel and select 'save link or target as...'",
webServiceGroupDashboardDescriptionLabel:"Description",version:"Version",welcomeInfo2Link3CaptionSharingWorkspaces:
"Sharing workspaces",datatype:"Data Type",datasets:"Datasets",fxs_fxsNotification_details:
"Details",dataflow:"Dataflow",columnPickerInvalidNames:"Column names highlighted in red are either already selected or are not found in the data.",
errorDialogPleaseTryRefreshing:"Please try refreshing the page.",visualizationStatisticMedian:
"Median",binaryClassificationPrecision:"Precision",dataflows:"Dataflows",columnPickerInvalidRange:
"Invalid range",webServiceGroupConfigurationTabTitle:"Configuration",dataGatewayRegistrationNeeded:
"Gateway not registered",rOutputStandardOutput:"Standard Output",guidedExperimentVisualizeTitle:
"visualize",navbarForumSearch:"Forum",fx_fxGrid_expanded:"Expanded",ssimUploadFailed:
"Dataset upload failed. {0}, check dataset imports tab for details",fxshell_toastbox_close:
"close",workspacePageWorkspaceDescription:"Workspace Description",originalExperimentDocumentation:
"Original Experiment Documentation",learnerWeightStandardDeviation:"Weight Standard Deviation",
viewModelDraftSaved:"Draft saved at {0}",ErrorSubmissionNameMustContainAtLeastOneNonWhitespaceCharacter:
"Submission name must contain at least one non-whitespace character.",fxs_fxsSupportGrid_statusColumn:
"Support",trialDialogHowToGetIt:"How to get it",description2:"Description",unsetWebServiceParameter:
"Unset parameter",guidedExperimentTransformationsContent:"We select modules to clean up and choose relevant columns for predicting income level. Module parameters can be set in the property panel.",
fx_fxGrid_ascending:"Ascending",provideWebServiceParameterDefaultValue:"Provide default value",
workspaceNameCannotBeEmpty:"Workspace name cannot be empty.",workspacePageWorkspaceStorage:
"Workspace storage",competitionSubmissionNotificationSuccessTitle:"Competition entry is submitted",
binaryClassificationNegativeLabel:"Negative Label",fx_fxDialog_ok:"Ok",webinarAiringOn:
"Airing on",viewModelSaving:"Saving...",nameIsAbstract:"'name' is abstract",PreviewDataIsNotAvailable:
"Preview data is not available, sorry",WebServiceParameters:"Web Service Parameters",
experimentEditorContextMenuPaste:"Paste",datasetCategorySamples:"Samples",signUpText:
"Sign up for a FREE account!",welcomeInfo4Link1CaptionExperiments:"Read about sample experiments",
trialDialogExceededModuleRuntimeLimitDescriptionForFree:"With a Free account, you cannot have any module that takes more than {0} minutes to run. To remove this restriction, please sign up for an {1}, and then create a new {2}.",
animatedExperimentAlternateStep0Content:"In just short 5 steps, let’s build a machine learning experiment to predict income level based on demographic information",
doneEditingWebServiceParameterName:"Done editing name",multiclassOverallAccuracy:
"Overall accuracy",newNotebookMenuOpenCallFailed:'Call to open notebook "{0}" failed.',
galleryIncludeDataset:"Include Dataset",uploadModuleDialogNewVersionOfModule:"This is a new version of an existing module",
webServiceEndpointCount:"Number of additional endpoints created for this web service: {0}",
setAsWebServiceParameter:"Set as web service parameter",workSchoolOrMicrosoftAccount:
"Work or School account, or a Microsoft account",visualizationInfinity:"Infinity",
dataGatewayGettingRegistrationKey:"Generating registration key...",modelPackageConfigErrorDiagnosticsMode:
"There was problem with saving your webservice's logging mode. Please try again later.",
fxshell_previewbadge_contentHeader:"Management Portal",avatarBar_languagePickerLabel:
"Language",webServiceDownloadNewExcelLabel:"Download Excel Workbook (2013 and later)",
recentWorkFilterBy:"Show experiments by ",treeEnsembleTrue:"true",navbarWorkspaceName:
"Workspace name",trialDialogDisabledFeatureDescription:"You need the Free or Standard tier of Azure Machine Learning to use this feature. To start using the Free tier, which has no time limit and lets you save your work, just sign in with your {0}.",
createScoreTutorialAddInputOutputNodesContent:"You will find new input and output nodes in the modules pane.",
datasetsModulesTrainedModelsLabel:"Datasets, Modules, Trained Models, and Transforms",
fxs_fxsPicker_ok:"OK",recentWorkLastRunLabel:"Last Run",viewLog:"View Log",fxs_fxsDrawerProgress_successMultiple:
"{0} operations have completed",errorParsingVisualizationFile:"Error producing the visualization of the output.",
downloadAndRegister:"Download and Register",webServiceNotInProduction:"Not in Production",
landingPageCarouselSlide3Caption:"Experiment Gallery",projectsPlusNewDescription:
"Create a new project.",fxs_fxsSubscriptionPicker_selectAllSearchResults:"Select All Search Results",
guidedTourNewButtonTitle:"Let's get started!",viewAllVideos:"VIEW ALL VIDEOS",publishExperimentToCommunityWizardExperimentDescriptionTitle:
"Experiment Description",graphNodeIDMismatch:"Updated GraphNode ID does not match previous ID.",
experimentSaveAsDialogExperimentName:"Experiment name",multiclassMicroAveragedRecall:
"Micro-averaged recall",fxs_fxsCopyButton_copySuccess:"Copied",cycleError:"This module is in a cycle.",
welcomeInfo1Text:"Get the latest information on important changes",welcomeInfo2Text:
"Use the studio to build and publish your experiments",welcomeInfo5Text:"Complete reference of all modules you can insert into your experiment and predictive workflow",
createScoreTutorialInputOutputNodesTitle:"INPUT & OUTPUT NODES",welcomeInfo3Text:
"Contribute to the community",welcomeInfo6Text:"Ask a question or check out video tutorials, blogs, and whitepapers from our experts",
welcomeInfo4Text:"View dataset and experiment samples",fxs_fxsProgressBox_active:
"In progress.",trialDialogExceededModuleRuntimeLimitTitle:"We've hit a little snag",
binaryClassificationNumberOfNegativeExamples:"Negative Examples",welcomePivotDisplayName:
"Welcome",experimentDetailedDescription:"Description",webServiceGroupDashboardWsUpdateTrainedModelType:
"UPDATE RESOURCES",fxshell_feedback_rightinfo:"Did you have the right information to complete your task?",
competitionSubmissionWizardStep2Warning:"Warning",workspaceSelectorEmptyResult1:
"No workspaces found.",workspaceSelectorEmptyResult2:"Select another region.",drawerMainMenuCompute:
"Compute",floatNotGreater:"The value {0} is not a valid number greater than {1}.",
datasetsNoRows:"No datasets found",schemaGenerationError:"Unable to generate schema and visualization.",
competitionSubmissionWizardStep2Validating:"Validating…",binaryClassificationAccuracy:
"Accuracy",homeReadMore:"Read more…",copyExperimentDialogLinkToCopy:"Open the new copy",
publishExperimentToCommunityErrorTitle:"An error occurred when publishing the experiment.",
fxs_fxsCustomerSupport_otherOptionsTitle:"Other support options",scoringWebServiceLabel:
"Predictive web service",fxs_fxsCustomerSupport_language:"Language",columnPickerColumnsSelected:
"{0} columns selected",webServiceUrlTitle:"URL",copyExperiment_ValidationFailure_Details:
"Error: {0}",modules:"Modules",experimentSubmissionFailedNoRequestId:"Experiment submission failed. {0}",
webServiceStagingEnvironmentTitle:"Default Endpoint",unknownPortType:"Unknown port type",
commandsSaveAs:"Save as",homeWelcomeSubtitle:"Want a taste?",notebookPublishCompletedEmailTitle:
"Check out my notebook",rocCumulativeAuc:"AUC",welcomeInfo1Link1CaptionReleaseNotes:
"Release Notes",predictiveExperimentNameSuffix:" [Predictive Exp.]",PropertyPanelStatusCode:
"Status code",guidedTourGetStartedNow:"show me the basics",publishExperimentToCommunityDescriptionLabel:
"Detailed Description",webServiceTestSuccessAndResultSummary:"'{0}' test returned {1}...",
guidedExperimentExperimentDescriptionContent:"Let’s build a machine learning experiment to predict whether an individual’s income exceeds 50K.",
createNotebookSessionFailed:"Could not create the Notebook session. {0}",fxshell_previewbadge_productionPortalLinkText:
"Previous portal",bubbleFinishedButtonText:"FINISH",regressionErrorHistogramHeader:
"Error Histogram",fxs_fxsCustomerSupport_purchasePlanLinkText:"upgrading your support plan",
apiCodeDialogTopText:"Generate Data Access Code",fx_fxPager_previous:"Previous page",
cannotDownloadThisTypeOfData:"Cannot download this type of data.",PropertyPanelStatusDetails:
"Status details",copyExperimentCommandName:"Copy to Workspace",fx_fxGrid_summary:
"A grid with rows of some unspecified type",WorkspaceNotFound:"Workspace Not Found",
creatingTrainedModelStepTitle:"Creating trained model from training experiment",
userAndInvitationNull:"Both User and Invitation are null",trialDialogDisabledModuleDescription:
"Looks like you are trying to use a module that is only available in the Free or Standard tier of Azure Machine Learning. To enable it, please sign in with a {0}.",
treeEnsembleShowMore:"Show more",columnPickerFirstRuleNoExlude:"First rule cannot exclude a selection. Create a selection to which to apply the exclusion first.",
binaryClassificationF1Score:"F1 Score",experimentEditorContextMenuSaveAsDataset:
"Save as Dataset",competitionSubmissionErrorMissingOutput:"Web service doesn't have output.",
publishWebServiceDialogTitle:"Publish Web service",ContextMenuTitle:"Context Menu",
publishWebServiceErrorConfirmationTitle:"An error occurred when publishing the web service.",
competitionSubmissionErrorInvalidOutputHeader:"Invalid output columns:",navbarHelpSearch:
"Search help and documentation",onlineSearch:"Online Search",viewDataset:"View dataset",
binaryClassificationFractionAboveThreshold:"Fraction Above Threshold",feedbackSubmitFeedback:
"Submit feedback",disposableNotAssignedOwner:"One or more disposables weren't assigned an owner. Please view 'attachedContext property' on this error object. Each disposable may have a stack trace indicating where it was (browser willing...)",
webServiceFileTypeTitle:"File Web service",trialDialogDisabledWebServicePublishDescription:
"Looks like you are trying to publish a web service. This feature is only available in the Free or Standard tier of Azure Machine Learning. To enable it, please sign in with a {0}",
cannotRemoveAllOwners:"Cannot remove all Owners from a Workspace",deleteOperationFailed:
"Delete operation failed: {0}",fxs_fxsWizard_next:"Next",columnPickerByName:"by name",
settings:"Settings",customModuleZipPackageCompleted:"Successfully built module(s) in package {0}. Added module(s): {1}",
trialDialogDisabledModuleUploadDescription:"Looks like you are trying to upload a custom module. This feature is only available in the Free or Standard tier of Azure Machine Learning. To enable it, please sign in with a {0}.",
errorDialogTitle:" has encountered a problem",runExperimentCommandTourTitle:"RUN EXPERIMENT",
competitionSubmissionWizardStep2TitleValidationFinished:"Validation finished.",notebooksListNoRows:
"No notebooks found",notebookPlusNewNotebookDescription:"Open a new notebook.",contextMenuOpenInNotebook:
"Open in a new Notebook",unsetPublish:"Unset as Publish Input",experimentEditorContextMenuRefresh:
"Refresh",nameTooLong:"The name is too long.",notebookPlusNewBlankRNotebookLabel:
"R",WebServiceApiParameterSchema:"Web service parameter",microsoftAzureMachineLearning:
"Microsoft Azure Machine Learning",selectTrainingModuleConfirmationTitle:"Select one training module",
rocPlotName:"roc",regressionMetricMeanAbsoluteError:"Mean Absolute Error",welcomeInfo4Link4CaptionOpenSamplesPivot:
"Go to sample experiments page",multipleColumnSelectHeading:"Select columns",projectExperimentNavigationError:
"Unable to open experiment",workspacePageWorkspaceTypeAnonymous:"Guest",uploadModuleDialogSupportedLanguagePy:
"Python",competitionSubmissionErrorMissingInput:"Web service doesn't have input.",
columnPickerSelectionRules:"Only selection by name and index are allowed when selecting with duplicates and preserving order of selection.",
treeEnsemblePrediction:"prediction",bubbleNextButtonText:"NEXT",notebookPlusNewExamplesLabel:
"Examples",webServiceGroupsTabTitle:"Web services",uploadTransformDialogEnterName:
"Enter a name for the new transform:",errorDeletingExperiment:'Experiment "{0}" cannot be deleted because of an unknown error: {1}',
JsonDeserializationErrorFlag:"Failed to deserialize an API response as JSON",workspaceRegenerateAuthTokenConfirmation:
"Are you sure you want to regenerate the {0} authorization token for workspace '{1}'?",
nameAlreadyInUse:"This name is already in use. Choose a different name.",UnhandledExceptionRefreshPrompt:
"Please {0} and try again.",format:"Format",fx_fxPager_next:"Next page",fx_fxPager_page:
"Page number",webServiceGroupDashboardWsTestHeader:"TEST",sendFeedback:"Send feedback",
guidedExperimentLearnMore:"Learn More&hellip;",projectsExtensionTitle:"Projects",
validationValueRequired:"Value required.",experimentGridHeaderSaveTime:"Modification Time",
credentialsNone:"No credentials are currently stored. Credentials entered in experiments will be automatically stored and shown in this page.",
trialDialogWhatVersion:"What version do I need?",trainingWebServiceLabel:"Training web service",
nodeCannotConnectOutsideExperiment:"Can't connect graph node outside of an experiment.",
refresh:"Refresh",sessionExpired:"Your session has expired. Please refresh the page to continue, You may be prompted to enter your credentials, depending on your browser settings.",
dataGatewayRegistrationPostamble:"You can also start Data Management Gateway Configuration Manager on the gateway computer and select Change Key or Register.",
fxshell_avatarbar_accountLabel:"View my bill",experimentEditorContextMenuSetAsPublishOutput:
"Set as Publish Output",workspaceNotFoundModelAboutAzureMLLink:"http://go.microsoft.com/fwlink/?LinkID=403763",
newDataGatewayDescriptionPlaceholder:"Enter the detailed description for your gateway.",
guidedTourChatWindowTitle:"Live Chat",fxs_fxsSupportGrid_incidentLinkTitle:"View incident details",
trialDialogEndTrial:"End trial",visualizationStatisticFeatureType:"Feature Type",
landingPageCarouselSlide2Caption:"Jupyter",landingPageCarouselSlide1Caption:"Quick Tour of Azure ML",
moduleErrorChatLink:"Live chat with us!",publishExperimentToCommunityPublishedExperimentGotoLink:
"View in Gallery",experimentProcessorErrorNoMatchingTrainedModel:"No matching trained model which is generated from training graph.",
useRangeBuilderLabel:"Use Range Builder",prPlotName:"precision/recall",publishExperimentToCommunityShouldGoToPublishedExperimentText:
"Take me to the published experiment.",fxs_fxsProgressBox_warning:"Warning",drawerMainMenuNetwork:
"Network",notRegisteredMessageHtml:"This data gateway needs to be registered with the Azure Machine Learning Studio. Use Download & Register to install a data gateway on a machine within your network.",
guidedExperimentSplitTitle:"split",notebookPublishCompletedLinkLabel:"Link to Published Notebook",
viewExperiment:"View Experiment",competitionSubmissionNotificationSubmittingTitle:
"Submitting to competition",helpSearchHelpContentFor:"Help content for ",feedbackPlaceholder:
"Enter feedback here",createWebServiceGraphTrainedModelCopyText:"This trained model will be copied over to your web service graph.",
azureTermsOfServiceLinkName:"Microsoft Azure Website Terms of Use",visualizationStatisticsHeader:
"Statistics",emptyExperiment:"Cannot save experiment draft with no modules.",multiclassMacroAveragedPrecision:
"Macro-averaged precision",createWebServiceGraphDescriptionLabel:"Description",webServiceDownloadExcelLabel:
"Download Excel Workbook",runExperimentCommandTourContent:"Click here to run the experiment.",
module:"Module",fxs_fxsDrawerProgress_successShortMultiple:"{0} have completed",
welcomeInfoContributeToGallery:"Share your experiments in Gallery",webServiceGroupDashboardParentExperimentViewSnapshot:
"View snapshot",sampleExperimentsPivotDisplayName:"Samples",inviteMoreUsers:"Invite more users",
webServiceSampleDataEnabledNo:"No",dataGatewayRegistrationKeyLabel:"Gateway registration key",
scoreDialogEnterDataToPredict:"Enter data to predict",fxshell_feedback_responsive:
"Is the UI responsive?",visualizationStatisticMissingValues:"Missing Values",trialDialogExceededModuleCountLimitTitle:
"Oops, looks like you hit a limit...",gatewayExpiredVersionHtml:'This data gateway is out of date and no longer usable. It has been marked offline. <a target="_blank" href="http://go.microsoft.com/fwlink/?LinkId=271260">Download<\/a> and install the latest version of the data gateway to bring it up to date and back online. (64 bit preferred)',
moduleErrorDialogCouldNotLoad:"Could not load module error message from server.",
PropertyPanelViewOutputLog:"View output log",workspacePageStorageLearnMoreUrl:"//go.microsoft.com/fwlink/?LinkID=517831",
competitionStatusCreateStarterExperiment:"Starter Experiment Copied",publishExperimentToCommunityValidationError_LargeDataset_Title:
"Publish to Gallery failed because the total size of the dataset exceeds the max limit of {0}. Please reduce the dataset size and try again.",
columnPickerInputMultipleNamesList:"Input a list of column names.",confirmDeleteTrainedModel:
"Are you sure you want to permanently delete this trained model?",competitionSubmissionWizardStep3TitleSubmissionSuccessful:
"Submit the Entry",columnPickerSearchColumns:"search columns",uploadingFailed:"Dataset upload failed. {0}",
guidedExperimentMachineLearningModulesContent:"We have many learning algorithms to choose from, such as “Two-Class Boosted Decision Tree”. Connect it to “Train Model”, specify “income” as prediction target, and connect to “Score Model” for prediction on the test dataset.",
createScoreTutorialNewExperimentContent:"We've created a copy of your original experiment and optimized it for scoring.",
experimentListPivotTemplates:"templates",experimentParameterDeletedNotification:
"Alert: Experiment parameter feature is disabled as we repurpose it to a new feature. The graph will keep working and there is no action you need to take.",
credential:"Credential",guidedExperimentRunTitle:"run",competitionSubmissionWizardStep3VisitGalleryPreamble:
"Please click on the checkmark to kick off the submission. This process might take a minute or two.",
columnPickerAllColumns:"All columns",rocTruePositive:"True Positive",byDate:"by {0}",
fxshell_feedback_no:"No",newModuleMenuHeader:"Upload a custom module zip package",
webServiceDiagnosticsLearnMoreUrl:"//go.microsoft.com/fwlink/?LinkID=517831",fxs_fxsProgressBox_success:
"Completed",experimentStateQueuedHover:"Your experiment has been submitted and is in the queue to be run.",
workspacePageAvailable:"Available",fx_fxBalloonIcon_help:"Help",fxs_fxsCustomerSupport_createButton:
"Create Ticket",newDataGatewayNameWizardTitle:"New data gateway",featureLogScale:
"{0} log scale",fxs_fxsDrawerProgress_errorMultiple:"{0} operations have failed",
fxs_fxsDrawerTray_warning:"Warning",HomeLoadingAndEllipsis:"Loading...",trialDialogParallelRunDisabledDescription:
"Looks like you are trying to run two or more experiments simultaneously. This feature is disabled in the Trial version of Azure Machine Learning. To enable it, please sign in with a {0}.",
rocTrueNegative:"True Negative",workspacePageWorkspaceTypeProduction:"Standard",
experimentSubmissionFailedWithRequestId:"Experiment submission failed. {0}. {1}",
projectQuickCreateNamePlaceHolder:"New project name",noSuchDataType:"No such DataType: {0}",
fxs_fxsMenu_preview:"Preview",Shell_Net_anotherSession:"You session has ended. A login from another browser was detected.",
resources:"Resources",recentWorkLastPublishedLabel:"Last Published",createWebServiceGraphTransformCopyText:
"This transform will be copied over to your web service graph.",workspacePageGetMoreStorage:
"Want more storage? Get the standard version {0}",uploadTransformDialogNewVersionOfTransform:
"This is the new version of an existing transform",apiCodeDialogLanguageLabel:"Language",
welcomeGettingStarted:"Quick Start",fxs_fxsHeaderBar_expanderExpandImageAlt:"Show Menu",
webServiceSampleDataEnabledYes:"Yes",experimentSummary:"Summary",rangeBuilderCount:
"Number of points :",cannotDeleteWebServiceGroupError:'Cannot delete web service "{0}" because one or more additional endpoints were created for it. These endpoints must be deleted before you can delete the web service.',
copyExperimentDialogWorkspaceInfoNotAvailable:"Could not load your available workspaces. Please refresh and try again.",
copyNotebookFromGalleryConfirmationTitle:"Copy notebook from Gallery",publishExperimentToCommunityUnlistedPublishExplanationLabel:
"Only people with the direct link can view and copy the experiment.",competitionSubmissionWizardStep2Error:
"Error",fxs_fxsDialog_complete:"Complete",fxs_fxsProgressBox_back:"Back to operations.",
datasetListNotebookCommand:"Open in Notebook",uploadTrainedModelDialogNewVersionOfTrainedModel:
"This is the new version of an existing trained model",fxs_fxsNotification_information:
"Information",fxshell_feedback_title:"We value your feedback",SaveTransform:"Save transform",
fx_fxUpload_label:"Browse your computer...",rocThreshold:"Threshold",fx_fxUpload_alt:
"Upload File",welcomeInfoSEAsiaBlog:"Azure ML goes to Southeast Asia",fxs_fxsSupportGrid_titleColumn:
"Title",submitCompetitionEntry:"Submit Competition Entry",uploadDatasetUploadANewDataset:
"Upload a new dataset",experimentEditorContextMenuSaveAsTransform:"Save as Transform",
regenerateAuthToken:"Regenerate",fxs_fxsDrawerMenu_close:"Close",menuLegal:"//go.microsoft.com/fwlink/?LinkID=404260",
forumLinkText:"View the Azure Machine Learning Forum",online:"Online",unknownResourceType:
"Unknown resource type",workspaceBarManageWorkspaceUsers:"Manage Workspace Users",
copyExperimentDialogCopyExperimentSucceeded:'Experiment "{0}" has been successfully copied to workspace "{1}"',
moduleErrorHelpLink:"Get general help for Error ",createScoreCommandTourContent:
"Use this command to create a predictive experiment from the current training experiment.",
welcomeFindingFeatures:"Finding the right features",visualizationHeader:"Visualizations",
competitionSubmissionWizardStep3Submitting:"Submitting…",Shell_Data_Loader_extensionDataLoadWarnings:
"Warnings encountered loading management data for this resource type.",workspaceNotFoundModelMachineLearningCenter:
"Machine Learning Center",competitionSubmissionWizardStep1Title:"Submission Name",
gettingStartedVideo4Link:"//go.microsoft.com/fwlink/?LinkID=403705&clcid=0x409",
gettingStartedVideo3Link:"//go.microsoft.com/fwlink/?LinkID=403710&clcid=0x409",
gettingStartedVideo5Link:"//go.microsoft.com/fwlink/?LinkID=403704&clcid=0x409",
competitionSubmissionErrorInvalidSchema:"Invalid web service input/output schema.",
publishWebServiceCommandTourContent:"Click here to publish the experiment as a web service.",
zoomToActualSize:"Zoom to actual size (9 key)",gettingStartedVideo2Link:"//go.microsoft.com/fwlink/?LinkID=403712&clcid=0x409",
fxs_fxsDrawerMenu_title:"New",dataGateway64BitPreferred:"(64bit preferred)",uploadDatasetDialogDataToUpload:
"Select the data to upload:",gettingStartedVideo1Link:"//go.microsoft.com/fwlink/?LinkID=403695&clcid=0x409",
experimentEditorContextMenuViewLog:"View Log",editDescription:"Edit Description",
guidedTourModulesPaneTitle:"Modules pane",homeEnjoyAccess:"Enjoy {0} hours of Guest Access. No sign-in required. {1}",
emptyNameSaveError:"Cannot save experiment draft with empty name.",guidedExperimentThisIsADatasetTitle:
"dataset",dataGatewayCredentialValuesRequired:"values required",datasetListDeleteCommand:
"Delete",trainingExperimentLink:"Training experiment",competitionSubmissionErrorMultiOutputPorts:
"Competition only supports one output.",treeEnsemblePredicate:"predicate",recentWorkNoRows:
"No experiments found",confirmCreateScoringGraphDetails:"We observe that you have training modules in the graph. Do you want to convert this experiment to scoring experiment? Please click details button for more information.",
trialDialogExpiredTrialDescription:"Hope you enjoyed your {0}-hour Guest Access. Want more? The Free version of Azure Machine Learning has no time limit and lets you save your work. To use it, just sign in with a {1}.",
gatewayOfflineMessageHtml:'This data gateway is offline. Launch Data Management Gateway Configuration Manager on the gateway machine and confirm that the "Service status" is "Started", "Gateway key status" is "Registered", and the status bar shows "Connected to Data Management Gateway Cloud Service". If not, check Windows Event Log on the gateway machine for detailed information.',
webServiceGroupDefaultDescription:"No description provided for this web service.",
ParameterRangeLabel:"Parameter Range :",LinkToHome:"Link to home",emptyName:"Cannot save experiment draft with empty name.",
competitionSubmissionErrorUnknown:"Unknown error.",competitionSubmissionWizardStep2ReadyToSubmit:
"Your entry is ready to submit.",updateScoreCommandTourTitle:"Update Predictive Experiment Command",
dataGatewayDownloadLinkText:"Download data management gateway",moduleErrorStartTime:
"Start time: ",commandsCancel:"Stop",onlyOneRuleAllowedError:"Unexpected rule addition: only one rule allowed.",
PropertyEditorNoParameter:"No parameters",publishExperimentToCommunityValidationError_CustomModule_Title:
"This experiment cannot be published because '{0}' is a custom module.",fxs_fxsCustomerSupport_validating:
"Validating the support level of subscription.",multipleWebServicePortNotSupported:
"Multiple web service input ports are not supported.",competitionSubmissionErrorCompetitionNotStarted:
"Competition has not started yet.",publishExperimentToCommunitySummaryLabel:"Summary",
editWebServiceParameterName:"Edit name",updateScoreCommandTourContent:"Use this command to update the trained model in the predictive experiment directly.",
commandsDiscardChanges:"Discard changes",navbarMobileHelpHeader:"Search Help Content",
preview:"Preview",createNotebookFailed:"Creating notebook {0} failed. {1}",trialDialogExceededStorageLimitDescriptionAnonymous:
"With a Guest workspace, you cannot use more than {0} GB of storage. To remove this restriction, please sign up for an {1}.",
newExperimentMenuBlankExperiment:"Blank Experiment",competitionSubmissionWizardStep2NoErrors:
"No Errors",copyToClipboardNotSupported:"Copy to Clipboard is not supported by this browser.",
uploadModuleDialogSupportedLanguagesConjunction:"or",recentWorkListExperimentsFailure:
"Failed to load experiment list",modelPackageConfigReadyForProdNo:"No",ErrorExperimentNameMustContainAtLeastOneNonWhitespaceCharacter:
"Experiment name must contain at least one non-whitespace character",fxs_fxsCustomerSupport_createIncidentTitle:
"Create Support Ticket",competitionSubmissionWizardStep1Preamble:"Please name your submission.",
fxshell_avatarbar_feedbackTooltip:"We value your feedback.",guidedTourNavigateToExperimentContent:
"Want to learn how to build an experiment now? ",incorrectEmailPleaseCorrect:"One or more of the addresses that you entered are incorrect; please fix the error(s) and try again.",
ssimUnexpectedError:"Unexpected error has occured",unknownNode:"Unknown node type",
copyExperimentDialogExperimentName:"Experiment Name",scoringExperimentTabContent:
"Predictive experiment",description:"Description:",uploadModuleDialogDescriptionText:
"You can upload a ZIP file that contains one or more custom modules written in {0} (more supported languages to come.)",
welcomeInfo6Link1CaptionForum:"Forum (ask a question)",deletingDataset:"Deleting dataset…",
copyExperiment_ValidationFailure_Title:"Failed to validate experiment for copying.",
ssimDatasetUploading:"Dataset is being uploaded",workspaceNotFoundGoToYourWorkspace:
"Go to your workspace",navbarMobileAccount:"Your account",backToExperiment:"Back to Experiment",
modelPackageConfigDiscard:"Discard",invitationCouldNotSendInvitationTo:"Could not send invitation to {0}",
modelCannotDiscardQueued:"Cannot discard a submitted experiment.",columnPickerExcludeColumnNames:
"Exclude column names",publishWebServiceOverwritingConfirmationTitle:"OVERWRITING SERVICE '{0}', ARE YOU SURE?",
publishExperimentToCommunityConsentCredentialsLabel:"Credentials contained in the modules in this experiment will not be published.",
fxshell_previewbadge_previewButtonText:"Preview",workspaceUnableToRegenAuthToken:
"{0} was unable to regenerate the authorization token, as workspace settings have been changed by another session. Please refresh the page and try again.",
viewModelRefreshRetry:"Refresh status failed... Retrying.",columnPickerExcludeColumnTypes:
"Exclude column types",uploadTransformDialogExistingTransform:"Existing transform:",
searchPlaceHolder:"Search help content",RightClickToActivateContextMenuOnEachOfTheRectangles:
"Right-click to activate the context menu on each of the rectangles",feedbackCharactersLeft:
"{0} character(s) left",columnPickerIndicesOutOfRange:"Indices must be greater than 0 and less than or equal to the number of columns ({0}).",
azureMLDescription:"Azure Machine Learning Studio is a GUI-based integrated development environment for constructing and operationalizing Machine Learning workflow on Azure.",
modelPackageConfigGeneral:"General",workspacePageLearnMore:"Learn More",editComment:
"Edit Comment",editCommand:"Edit",navbarMobileHelp:"Help",navbarMobileChat:"Chat",
workspacePageUsed:"Used",competitionSubmissionWizardStep2TitleError:"Oops, we've encountered an error.",
workspaceCannotBeEmpty:"Workspace name cannot be empty.",allExperimentsNoRows:"No experiments found",
treeEnsembleFalse:"false",treeEnsembleEdges:"Edges",azureSubscriptionDisabled:"Your Azure subscription {0} is disabled.  Please contact your Azure subscription administrator.",
newExperimentMenuOpenInStudio:"OPEN IN STUDIO",workspace:"workspace",publishExperimentToCommunityImageGalleryTab:
"Image Gallery",modelPackageConfigOutputSchema:"Output Schema",errorGettingVisualizationData:
"Error getting visualization data. {0}",viewPriorRun:"View Prior Run",lookingForTrainModuleStepTitle:
"Looking for train module in the training experiment",Impl_UI_Notifications_DataLoad_viewDataLoadError:
"Failed to load management data for the current view.",newNotebookMenuSearchPlaceholder:
"Search notebooks",workspaceOwnersEmail:"Owner's email",newNotebookMenuOpenNotebook:
"OPEN NOTEBOOK",multiclassFrequency:"Frequency",experimentStateRunning:"Running",
trialDialogDisabledDatasetUploadDescription:"Looks like you are trying to upload a dataset. This feature is only available in the Free or Standard tier of Azure Machine Learning. To enable it, please sign in with a {0}.",
validationValueIsGreaterThanMaximumOf:"The value {0} is greater than maximum of {1}.",
welcome:"Welcome to Azure Machine Learning",republishExperimentToCommunityWizardTitle:
"Republish to Gallery",homeEnterMLStudio:"Enter Azure Machine Learning Studio",microsoftAccountUrl:
"http://www.microsoft.com/en-us/account/default.aspx",videos:"Videos",fxs_fxsHeaderBar_expanderCollapseImageAlt:
"Hide Menu",confirmPublishWithoutPorts:"The web service input or output or both have not been selected. Please make sure you have selected the appropriate input and output for the web service. Select 'YES, PUBLISH' to go ahead an publish your web service as is. Select 'NO, CANCEL' to go back and select the input and/or output.",
createScoreTutorialAddInputOutputNodesTitle:"ADDING INPUT & OUTPUT NODES",binaryClassificationPositiveLabel:
"Positive Label",errorBrowserCurrent:"Current browser:",fxshell_logviewer_performance:
"Performance",visualizationStatisticStandardDeviation:"Standard Deviation",newExperimentMenuDescription:
"Create a new experiment",fxs_fxsDrawer_help:"Help",multiclassMacroAveragedRecall:
"Macro-averaged recall",workspaceSelectorLoadingMessage:"Loading",welcomeInfo2Link2aCaptionCreatingAndRunningExperiments:
"Creating and running experiments",columnPickerExcludeColumnIndices:"Exclude column indices",
noModulesError:"This experiment contains no modules.",webServiceTestEnabled:"Enable Anonymous Test?",
upToDate:"Up to date",uploadModuleUploadANewModule:"Upload a new module",mainVideoUrl:
"//channel9.msdn.com/Blogs/Windows-Azure/A-quick-tour-of-Azure-Machine-Learning",
fxshell_feedback_excellent:"Excellent",ChooseTrainedModelToDeprecateAndEllipsis:
"Select trained model to deprecate...",experimentEditorContextMenuEditComment:"Edit Comment",
dataImportStatus:"Data Import Status",moduleErrorErrorMessageLabel:"Error message:",
welcomeInfo1Link2CaptionUpdates:"New features and highlights",nodeCannotReplaceAlreadyInExperiment:
"Can't replace a graph node with a node that is already in an experiment.",publishExperimentToCommunityVisibilityPublic:
"PUBLIC",learnerWeightMean:"Weight Mean",columnPickerColumnsAvailableShowing:"{0} columns available (showing {1})",
VisualizationColumns:"columns",CarouselNext:"Next",commandsRefresh:"Refresh",gettingStartedVideoThumbnail:
"gettingStartedVideoThumb.png",trialDialogExpiringTrialTitle:"Keep going?",animatedExperimentStep4Content:
"Let’s use the trained model to predict on the test dataset.",drawerMainMenuAppServices:
"Application Services",ModelPackageViewStagingEnvironment:"Staging environment",
gatewayExpiringVersionHtml:'This data gateway needs to be updated by {0} or it will be no longer be usable and marked offline. <a href="http://go.microsoft.com/fwlink/?LinkId=271260">Download<\/a> and install the latest version of the data gateway. (64 bit preferred)',
WebServiceOutputSchema:"output schema",fx_fxUsageBars_xofyunits:"{0} of {1}",link:
"link",bins:"bins",copy:"Copy",host:"host",home:"Home",none:"None",name:"Name",type:
"Type",user:"Users",role:"Role",size:"Size",userActions:"A workspace user can list, clone and create experiments and datasets in the workspace.",
colonInNamesSaveErrror:"Cannot save experiment draft with ':' in input/output names",
HomeEllipsis:"....",multiclassPredictedClass:"Predicted Class",uploadDatasetDialogExistingDataset:
"Existing dataset:",rename:"Rename",remove:"Remove",trialDialogExceededModuleCountLimitDescription:
"With a Guest workspace, you cannot run an experiment with more than {0} modules. To remove this restriction, please sign up for an {1}, and then create a new {2}.",
homeCreateExperiment:"Create Experiment",moduleErrorEndTime:"End time: ",fx_fxGrid_expandError:
"Errors encountered. [{0}|Click here] to retry.",submit:"Submit",status:"Status",
removeDataImportsConfirmation:"Remove {0} Data Import(s)",studio:"Studio"})}n()}
(),function(){function n(){u(t,"Microsoft.MetaAnalytics.Web.Scripts.waz.ClientResources",
{kiloBytesLong:"Kilobytes",megaBytes:"MB",exaBytesLong:"Exabytes",yottaBytes:"YT",
petaBytesLong:"Petabytes",megaBytesLong:"Megabytes",petaBytes:"PT",gigaBytes:"GB",
zettaBytes:"ZB",bytes:"B",yottaBytesLong:"Yottabytes",kiloBytes:"KB",teraBytes:"TB",
gigaBytesLong:"Gigabytes",exaBytes:"EB",bytesLong:"Bytes",zettaBytesLong:"Zettabytes"})}
n()}()})(this)