<!-- Keep a Changelog guide -> https://keepachangelog.com -->

# openapi-gui-editor Changelog

## [0.9.1] - 2025-04-19
### Added
- Initial release

## [1.0.1] - 2025-04-22
### Added
- Fixed issues with invalid OpenAPI documents
- Added product descriptor

## [1.0.2] - 2025-05-18
### Added
- Fixed serialization of empty external docs
- Add reading json format
- Fixed some UI/UX issues

## [1.0.3] - 2025-05-20
### Added
- 2025.2 compatibility

## [1.0.4] - 2025-05-21
### Added
- Fixed issued with storing response codes
- Enhanced minor UI issues

## [1.0.5] - 2025-05-22
### Added
- Preserve order of paths/operations in the UI

## [1.0.6] - 2025-05-23
### Added
- Fixed bugs with adding/deleting methods

## [1.0.7] - 2025-05-28
### Added
- Fixed icon first load issue
- Added extensions support in the info section

## [1.0.8] - 2025-05-31
### Added
- Added quick suggestions for schema rules
- Fixed bugs with a document version type

## [1.0.9] - 2025-06-02
### Added
- Autofix some minor issues with the document
- Reordered some objects in yaml
- Fixed tags description serialization

## [1.0.10] - 2025-06-05
### Added
- Long names (like paths, schema names, etc.) are now shortened by replacing the middle part with an ellipsis for better readability.
- Fixed display issues with OpenAPI extensions (x-...).
- Fixed bugs related to editing the description field in schema definitions.

## [1.0.11] - 2025-06-08
### Added
- Fixed bug with "authorizationCode" field in the security scheme.

## [1.0.12] - 2025-06-09
### Added
- Bugfix for WebHooks serialization.
- Added "Callback references" support.

## [1.0.13] - 2025-06-11
### Added
- Fixed MediaType schema serialization bug
- Fixed form validation issues in Parameters and Links sections

## [1.0.14] - 2025-06-17
### Added
- OpenAPI 3.0 Support

## [1.0.15] - 2025-06-20
### Added
- Fixed some Windows-specific issues with the serialization of the OpenAPI document.

## [1.0.16] - 2025-07-05
### Added
- Changed some UI elements (components, paths) for better usability.

## [1.0.17] - 2025-07-18
### Added
- Fixed creating JSON openapi documents

## [1.0.18] - 2025-08-04
### Added
- Added welcome screen
- Fixed some minor issues with the UI

## [1.0.19] - 2025-08-12
### Added
- Added notification for possible openapi documents

## [1.0.20] - 2025-09-12
### Added
- Parse errors don't prevent loading the document anymore
- Fixed some minor UI bugs

## [1.0.21] - 2025-09-15
### Added
- Changed yaml serialization for better redability
- Preserve order in schema section


## [1.0.22] - 2025-09-22
### Added
- Fixed some minor UI bugs
- Preserve order of elements in info and params

## [1.0.23] - 2025-09-26
### Added
- Fixed minor UI bugs
- Preserve order of schema elements

## [1.0.24] - 2025-10-05
### Added
- Simplified the UI for adding new elements (like paths, schemas, etc.)
- Fixed some minor UI bugs

## [1.0.25] - 2025-10-12
### Added
- Clickable links in item lists (like paths, schemas, etc.)
- Simplified UI for parameters