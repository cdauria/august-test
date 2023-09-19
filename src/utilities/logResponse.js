import { table, getMinifiedRecord } from './getAirtableData'

export default async (req, res) => {
  const { questionId, option } = req.body;

  try {
    const createdRecord = await table.create([
      {
        fields: {
          QuestionId: questionId,
          SelectedOption: option,
        },
      },
    ]);

    res.status(200).json(getMinifiedRecord(createdRecord[0]));
  } catch (error) {
    console.error('Error logging response:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
