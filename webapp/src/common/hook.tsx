import { useCallback } from 'react';
import { AnyObject } from './type';

export const useYupValidationResolver = (validationSchema: AnyObject) =>
  useCallback(
    async (data: AnyObject) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors: any) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors: AnyObject, currentError: AnyObject) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {},
          ),
        };
      }
    },
    [validationSchema],
  );
