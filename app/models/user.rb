class User < ApplicationRecord
  validates :username, :session_token, :email, presence: true, uniqueness: true
  validates :password_digest, :image_url, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :designer, inclusion: { in: [true, false] }

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :projects,
  class_name: :Project,
  foreign_key: :user_id,
  primary_key: :id

  has_many :pictures,
  through: :projects,
  source: :pictures

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
