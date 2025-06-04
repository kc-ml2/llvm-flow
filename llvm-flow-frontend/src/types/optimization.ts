export interface OptimizationRecord {
  id: string
  user_name: string
  opt_passes: string[]
  llvm_version: string
  file_names: string[]
  created_at: Date
}

// Server pagination response type
export interface OptimizationGetPagedResponse {
  data: OptimizationRecord[]
  total_count: number
  page: number
  page_size: number
}
