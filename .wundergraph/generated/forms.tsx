import React, { useEffect, useState } from "react";
import { Response } from "./client";
import { MissionsInput, MissionsResponse } from "./models";
import { useQuery, useLiveQuery } from "./hooks";
import jsonSchema from "./jsonschema";
import Form from "@rjsf/core";

export interface FormProps<T> {
	onResult?: (result: T) => void;
	liveValidate?: boolean;
}

export interface MutationFormProps<T> extends FormProps<T> {
	refetchMountedQueriesOnSuccess?: boolean;
}

export const MissionsForm: React.FC<FormProps<Response<MissionsResponse>>> = ({ onResult, liveValidate }) => {
	const [formData, setFormData] = useState<MissionsInput>();
	const { response, refetch } = useQuery.Missions({ input: formData });
	useEffect(() => {
		if (onResult) {
			onResult(response);
		}
	}, [response]);
	return (
		<div>
			<Form
				schema={jsonSchema.Missions.input}
				formData={formData}
				liveValidate={liveValidate}
				onChange={(e) => {
					setFormData(e.formData);
				}}
				onSubmit={async (e) => {
					await refetch({ input: formData });
				}}
			/>
		</div>
	);
};

export const MissionsLiveForm: React.FC<FormProps<Response<MissionsResponse>>> = ({ onResult, liveValidate }) => {
	const [formData, setFormData] = useState<MissionsInput>();
	const { response } = useLiveQuery.Missions({ input: formData });
	useEffect(() => {
		if (onResult) {
			onResult(response);
		}
	}, [response]);
	return (
		<div>
			<Form
				schema={jsonSchema.Missions.input}
				formData={formData}
				liveValidate={liveValidate}
				onChange={(e) => {
					setFormData(e.formData);
				}}
				children={<></>}
			/>
		</div>
	);
};
