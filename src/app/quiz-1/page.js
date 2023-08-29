import Airtable from 'airtable';
import getAirtableData from '../../utilities/getAirtableData'
import Card from '../../components/Card'
import PageBackground from '../../components/PageBackground'
import Counter from '../../components/Counter'

export default async function Page () {
    const processedData = await getAirtableData();
    
        return (
            <PageBackground>
            <div>
                <Counter />
                {processedData.map((record) => (
                    <Card key={record.id} record={record} />
                ))}
            </div>
            </PageBackground>
            );
}