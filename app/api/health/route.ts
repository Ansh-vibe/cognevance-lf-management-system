import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({ service: 'learnflow', status: 'ok', database: 'neon-configured' })
}
