FROM hub.rat.dev/library/ruby:3.2

# Install dependencies
RUN sed -i 's|http://deb.debian.org/debian|http://mirrors.aliyun.com/debian|g' /etc/apt/sources.list.d/debian.sources && \
    sed -i 's|http://deb.debian.org/debian-security|http://mirrors.aliyun.com/debian-security|g' /etc/apt/sources.list.d/debian.sources && \
    apt-get update && \
    apt-get install -y build-essential sudo nodejs vim iputils-ping telnet && \
    rm -rf /var/lib/apt/lists/*
    
# Set the working directory
WORKDIR /usr/src/app

# Set permissions for the working directory
RUN chown -R root:root /usr/src/app

# Switch to the non-root user
USER root

# Copy Gemfile into the container
COPY Gemfile ./

# 使用阿里云 RubyGems 源
RUN gem sources --remove https://rubygems.org/ && \
    gem sources --add https://mirrors.aliyun.com/rubygems/ && \
    gem install bundler -v 2.3.26 && \
    bundle config mirror.https://rubygems.org https://mirrors.aliyun.com/rubygems

# Install gems (now includes kramdown-parser-gfm)
RUN bundle install --without development test

# Copy all source files
COPY . .

# Build the site
RUN bundle exec jekyll build --config _config.yml

# Serve the site
CMD ["jekyll", "serve", "-H", "0.0.0.0", "-w", "--config", "_config.yml"]
