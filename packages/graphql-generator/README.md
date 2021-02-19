# Google Ad Manager GraphQL Schema Generator
Reads the GAM API WSDL files and generates a corresponding GraphQL schema for a provided API version.

## General
- WSDL types that lack child fields will be generated as a definition with a `_: Boolean` placeholder field. This is due to the GraphQL spec requring all definitions to have at least one field. This applies to all generated `Type`, `Interface`, `Input`, and `Enum` definitions.
- When building fields for `Type` and `Interface` definitions, the reference field value is handled as follows:
  - if explicitly mapped to a scalar value use the mapped value (e.g. `xsd:string` becomes `String`)
  - otherwise, load the `WSDLType` object.
  - if `WSDLType.isEnumerated`, reference the `Enum` name
  - if `WSDLType.abstract`, reference the `Interface` name
  - if the type has child types (via extension), reference the `Interface` name
  - otherwise, use the `Type` name

## Enums
- A definition will be an `Enum` when the `WSDLType.enumeration` array field has values.

## Interfaces
- A definition will _only_ be an `Interface` when the `WSDLType.abstract` field is set to `true`.
- A definition will be an `Interface` _with_ a corresponding `Type` when the WSDL type is extended by another WSDL type.

## Types
- A type will _implement_ an `Interface` when the `WSDLType.extension` field has a value set.
- Types with the `WSDLType.abstract` field set to `true` will _never_ be a concrete `Type` and will be generated as an `Interface`

## Inputs

## Queries

## Mutations
