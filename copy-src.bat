del /q .\src\app\services\surveyDb\types\*
for /d %%x in (.\src\app\services\surveyDb\types\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\typescript\*.ts .\src\app\services\surveyDb\types /Y

if NOT EXIST .\src\app\services\surveyDb\webAPI (
    mkdir .\src\app\services\surveyDb\webAPI
)
del /q .\src\app\services\surveyDb\webAPI\*
for /d %%x in (.\src\app\services\surveyDb\webAPI\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\http-providers\*.* .\src\app\services\surveyDb\webAPI /E/Y

if NOT EXIST .\src\app\components\survey\select (
    mkdir .\src\app\components\survey\select
)

del /q .\src\app\components\survey\select\*
for /d %%x in (.\src\app\components\survey\select\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\select\*.* .\src\app\components\survey\select /E/Y

if NOT EXIST .\src\app\components\survey\list-item (
    mkdir .\src\app\components\survey\list-item
)

del /q .\src\app\components\survey\list-item\*
for /d %%x in (.\src\app\components\survey\list-item\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\list-item\*.* .\src\app\components\survey\list-item /E/Y

if NOT EXIST .\src\app\components\survey\form (
    mkdir .\src\app\components\survey\form
)

del /q .\src\app\components\survey\form\*
for /d %%x in (.\src\app\components\survey\form\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\form\*.* .\src\app\components\survey\form /E/Y

if NOT EXIST .\src\app\components\survey\edit-providers (
    mkdir .\src\app\components\survey\edit-providers
)
del /q .\src\app\components\survey\edit-providers\*
for /d %%x in (.\src\app\components\survey\edit-providers\*) do @rd /s /q "%%x"
xcopy C:\Dev\Git\BoltGenerator\results\edit-provider\*.* .\src\app\components\survey\edit-providers /E/Y
