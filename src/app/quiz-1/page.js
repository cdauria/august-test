import Airtable from 'airtable';
import getAirtableData from '../../utilities/getAirtableData'
import Card from '../../components/Card'

export default async function Page () {
    const processedData = await getAirtableData();
        return (
            <div>
                {processedData.map((record) => (
                    <Card key={record.id} record={record} />
                ))}
            </div>
            );
}