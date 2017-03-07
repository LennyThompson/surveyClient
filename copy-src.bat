xcopy C:\Dev\Git\BoltGenerator\results\typescript\*.ts .\app\services\surveyDb\types /Y
xcopy C:\Dev\Git\BoltGenerator\results\http-providers\*.ts .\app\services\surveyDb\webAPI /Y
xcopy C:\Dev\Git\BoltGenerator\results\select\*.* .\app\components\survey\select /Y
xcopy C:\Dev\Git\BoltGenerator\results\form\*.* .\app\components\survey\form /E/Y
if NOT EXIST .\app\components\survey\simple-providers (
    mkdir .\app\components\survey\simple-providers
)
xcopy C:\Dev\Git\BoltGenerator\results\simple-provider\*.* .\app\components\survey\simple-providers /Y
