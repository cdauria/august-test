
import Airtable from "airtable";

const getAirtableData = async (options) => {
    const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_PAT }).base(process.env.NEXT_PUBLIC_BASE_ID);
    const records = await base('One').select({}).all();
    const processedData = records.map((record) => {
      console.log('Fields:', record.fields); // Log the fields of each record
      return {
        id: record.id,
        question: record.fields.question,
        options: [record.fields.One, record.fields.Two],
      };
    });
    console.log('Processed Data:', processedData); // Log the processed data
    return processedData;
  };
  
  export default getAirtableData;
  
/* import Airtable from 'airtable';

const getAirtableData = async (options) => {
    const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_PAT }).base(process.env.NEXT_PUBLIC_BASE_ID);
    const records = await base('One').select({}).all();
    const processedData = records.map((record) => {
        const { id, fields } = record;
        return {
            id,
            ...fields,
        };
    });
    console.log(records)
    return processedData
}

export default getAirtableData*/