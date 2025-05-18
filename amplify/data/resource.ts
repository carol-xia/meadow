import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  ExpenseItem: a
    .model({
      username: a.string().required(),
      expenseReportName: a.string().required(),
      purchaseName: a.string().required(),
      creationDate: a.datetime().required(),
      category: a.string().required(),
      purchaseDate: a.datetime(),
      price: a.float().required(),
    })
    .authorization((allow) => [allow.owner()])
    .identifier(["username", "expenseReportName"])
    .secondaryIndexes((index) => [index("purchaseName")]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});