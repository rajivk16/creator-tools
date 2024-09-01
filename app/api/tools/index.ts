import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const { data, error } = await supabase.from('tools').select('*');
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      return res.status(200).json(data);

    case 'POST':
      const { name, description, features, pricing, category_id } = req.body;
      const { data: insertData, error: insertError } = await supabase
        .from('tools')
        .insert([{ name, description, features, pricing, category_id }]);

      if (insertError) {
        return res.status(500).json({ error: insertError.message });
      }

      return res.status(201).json(insertData);

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
