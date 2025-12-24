// app/api/drive-photos/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export interface DrivePhoto {
  id: string;
  name: string;
  webViewLink?: string;
  webContentLink?: string;
  thumbnailLink?: string;
}

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

function extractFolderIdFromUrl(url: string): string {
  const match = url.match(/folders\/([a-zA-Z0-9-_]+)/);
  const folderId = match ? match[1] : '';
  console.log('Extracted folder ID:', folderId); // Add this line to verify folder ID
  return folderId;
}

async function getPhotosFromFolder(folderId: string): Promise<DrivePhoto[]> {
  const drive = google.drive({ version: 'v3', auth });
  
  try {
    const response = await drive.files.list({
      q: `'${folderId}' in parents and mimeType contains 'image/'`,
      fields: 'files(id, name, webViewLink, webContentLink, thumbnailLink)',
      orderBy: 'name',
    });
    
    return response.data.files?.map(file => ({
      id: file.id!,
      name: file.name!,
      webViewLink: file.webViewLink ?? undefined,
      webContentLink: file.webContentLink ?? undefined,
      thumbnailLink: file.thumbnailLink ?? undefined,
    })) || [];
  } catch (error) {
    console.error('Error fetching photos:', error); // Log full error object
    throw error; // Re-throw to catch in API handler
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const folderType = searchParams.get('folder');

    if (!folderType || !['interior', 'exterior'].includes(folderType)) {
      return NextResponse.json({ error: 'Invalid folder type' }, { status: 400 });
    }

    const folderUrls = {
      interior: 'https://drive.google.com/drive/folders/1sdsYB78Hx_g7ihurnOrqBnbnQij0iKjT',
      exterior: 'https://drive.google.com/drive/folders/16FL4EIdjx02YR5kIZbwtDGJmDCdPaGjc'
    };

    const folderId = extractFolderIdFromUrl(folderUrls[folderType as keyof typeof folderUrls]);
    if (!folderId) {
      return NextResponse.json({ error: 'Invalid folder ID' }, { status: 400 });
    }

    const photos = await getPhotosFromFolder(folderId);

    return NextResponse.json({ photos });
  } catch (error) {
    console.error('API Error:', error); // Log full error object
    return NextResponse.json({ error: 'Failed to fetch photos' }, { status: 500 });
  }
}