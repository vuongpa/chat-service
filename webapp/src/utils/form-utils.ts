import { enqueueSnackbar } from 'notistack';
import { AnyObject } from '../common/type';
import { messageUtils } from './message-utils';
import { request } from './request-utils';
import { isEmpty } from 'lodash';

export interface FormProps {
  endpoint: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PUT';
  modifyDataBeforeSubmit?: (formValue: AnyObject) => AnyObject;
  beforeSubmit?: (formValue: AnyObject) => boolean;
  onGotError?: (error: AnyObject) => void;
  onGotSuccess?: (response: AnyObject) => void;
  successMessage?: string;
  errorMessage?: string;
  notify?: boolean;
  params?: AnyObject;
}

export const formUtils = {
  submitForm: (formProps: FormProps, submitData: AnyObject = {}) => {
    const {
      endpoint,
      method,
      modifyDataBeforeSubmit,
      beforeSubmit,
      onGotError,
      onGotSuccess,
      successMessage = messageUtils.successMessage[method as keyof typeof messageUtils.errorMessage],
      errorMessage,
      notify = false,
      params = {},
    } = formProps;

    const dataModifier = modifyDataBeforeSubmit?.(submitData) || submitData;
    if (beforeSubmit?.(dataModifier) ?? true) {
      request({
        method,
        data: dataModifier,
        url: formUtils.endpointWithQuery(endpoint, params),
      })
        .then(response => {
          if (notify) {
            enqueueSnackbar(successMessage, { variant: 'success', autoHideDuration: 1000 });
          }
          onGotSuccess?.(response);
        })
        .catch(err => {
          if (notify) {
            enqueueSnackbar(
              err?.response?.data?.message || errorMessage || messageUtils.errorMessage[method as keyof typeof messageUtils.errorMessage],
              { variant: 'error', autoHideDuration: 1000 },
            );
          }
          onGotError?.(err);
        });
    }
  },
  endpointWithQuery: (endpoint: string, params?: AnyObject) => {
    if (isEmpty(params)) {
      return endpoint;
    }

    return `${endpoint}?filter=${encodeURIComponent(JSON.stringify(params))}`;
  },
};
