import { JoiError } from "./joi-error";

export const Validate = (schema: any, request: any) => {
    const result = schema.validate(request, {
        abortEarly: false,
        allowUnknown: false
    });

    if (result.error) {
        let details: Record<string, string> = {};
        for (let i = 0; i < result.error.details.length; i++) {
            const detail = result.error.details[i];

            const key: string = detail.context.key;
            details[key] = detail.message.replaceAll('\"', '')
        }
        throw new JoiError(details);
    } else {
        return result.value;
    }
}