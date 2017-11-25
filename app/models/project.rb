class Project < ApplicationRecord
  validates :title, :state, :city, presence: true

  belongs_to :user,
  class_name: :User,
  foreign_key: :user_id,
  primary_key: :id

  has_many :pictures,
  class_name: :Picture,
  foreign_key: :project_id,
  primary_key: :id

end
