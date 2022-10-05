import axios, { AxiosResponse, CancelToken } from 'axios';
import { pick } from 'ramda';

import { Resource } from '../../models';
import { AcknowledgeFormValues } from '../Resource/Acknowledge';
import { DowntimeToPost } from '../Resource/Downtime';

import {
  acknowledgeEndpoint,
  checkEndpoint,
  commentEndpoint,
  downtimeEndpoint,
} from './endpoint';

interface ResourcesWithAcknowledgeParams {
  cancelToken: CancelToken;
  params: AcknowledgeFormValues;
  resources: Array<Resource>;
}

const acknowledgeResources =
  (cancelToken: CancelToken) =>
  ({
    resources,
    params,
  }: ResourcesWithAcknowledgeParams): Promise<Array<AxiosResponse>> => {
    const payload = resources.map(({ type, id, parent }) => ({
      id,
      parent: parent ? { id: parent?.id } : null,
      type,
    }));

    return axios.post(
      acknowledgeEndpoint,
      {
        acknowledgement: {
          comment: params.comment,
          is_notify_contacts: params.notify,
          is_persistent_comment: params.persistent,
          is_sticky: params.isSticky,
          with_services: params.acknowledgeAttachedResources,
        },
        resources: payload,
      },
      { cancelToken },
    );
  };

interface ResourcesWithDowntimeParams {
  params: DowntimeToPost;
  resources: Array<Resource>;
}

const setDowntimeOnResources =
  (cancelToken: CancelToken) =>
  ({
    resources,
    params,
  }: ResourcesWithDowntimeParams): Promise<AxiosResponse> => {
    const payload = resources.map(({ type, id, parent }) => ({
      id,
      parent: parent ? { id: parent?.id } : null,
      type,
    }));

    return axios.post(
      downtimeEndpoint,
      {
        downtime: {
          comment: params.comment,
          duration: params.duration,
          end_time: params.endTime,
          is_fixed: params.fixed,
          start_time: params.startTime,
          with_services: params.isDowntimeWithServices,
        },
        resources: payload,
      },
      { cancelToken },
    );
  };

interface ResourcesWithRequestParams {
  cancelToken: CancelToken;
  resources: Array<Resource>;
}

const checkResources = ({
  resources,
  cancelToken,
}: ResourcesWithRequestParams): Promise<AxiosResponse> => {
  const payload = resources.map(({ type, id, parent }) => ({
    id,
    parent: parent ? { id: parent?.id } : null,
    type,
  }));

  return axios.post(
    checkEndpoint,
    {
      resources: payload,
    },
    { cancelToken },
  );
};

export interface CommentParameters {
  comment: string;
  date: string;
}

interface ResourcesWithCommentParams {
  parameters: CommentParameters;
  resources: Array<Resource>;
}

const commentResources =
  (cancelToken: CancelToken) =>
  ({
    resources,
    parameters,
  }: ResourcesWithCommentParams): Promise<AxiosResponse> => {
    return axios.post(
      commentEndpoint,
      {
        resources: resources.map((resource) => ({
          ...pick(['id', 'type'], resource),
          comment: parameters.comment,
          date: parameters.date,
          parent: resource?.parent ? { id: resource?.parent?.id } : null,
        })),
      },
      { cancelToken },
    );
  };

export {
  acknowledgeResources,
  setDowntimeOnResources,
  checkResources,
  commentResources,
};
