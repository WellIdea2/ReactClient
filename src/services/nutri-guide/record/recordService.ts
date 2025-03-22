import { RecordCreateRequest, RecordUpdateRequest, RecordView } from '../../../types/nutri-guide/record/Record';
import { Page } from '../../../types/shared/Page';
import instance from '../../config/axiosConfig';
import { recordPaths } from './recordPaths';

export async function getAllRecords() {
  const response = await instance.get<Page<RecordView>>(recordPaths.GET_ALL());

  return response.data;
}

export async function getRecordById(id: string) {
  const response = await instance.get<RecordView>(recordPaths.GET_BY_ID(id));

  return response.data;
}

export async function createRecord(record: RecordCreateRequest) {
  const response = await instance.post<RecordView>(recordPaths.CREATE(), record);

  return response.data;
}

export async function updateRecord(id: string, record: RecordUpdateRequest) {
  const response = await instance.patch<RecordView>(recordPaths.UPDATE(id), record);

  return response.data;
}

export async function deleteRecord(id: string) {
  const response = await instance.delete(recordPaths.DELETE(id));
  
  return response;
}